const fs = require('fs-extra');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const kebab = require('lodash.kebabcase');

const filterFiles = basePath => fileOrFolder =>
  fs.statSync(path.join(basePath, fileOrFolder)).isDirectory();

const base = path.resolve('src/slides');

const getNotes = ast => {
  let noteIndex = 0;
  let notes = {};
  traverse(ast, {
    enter(path) {
      if (!path.node || !path.node.left || !path.node.right) {
        return;
      }
      if (
        path.node.left.type === 'MemberExpression' &&
        path.node.right.type === 'ObjectExpression'
      ) {
        const { name } = path.node.left.object;
        path.node.right.properties.forEach(property => {
          const { key, value } = property;
          if (key && key.name === 'notes') {
            notes[kebab(name)] = value.quasis[0].value.raw.replace(/\\`/g, '`').trim();
          }
        });
      }
    }
  });

  return notes;
};

async function run() {
  try {
    const notesFiles = await fs.readdir(base);

    const notes = await Promise.all(
      notesFiles
        .filter(filterFiles(base))
        .map(folder => fs.readFile(path.join(base, folder, 'index.js'), 'utf8').then(code => ([folder, code])))
    ).then(allNotes => {
      return allNotes.reduce((collection, [folder, code], index) => {
        const ast = babylon.parse(code, {
          sourceType: 'module',
          plugins: [
            'jsx',
            'objectRestSpread',
            'classProperties',
            'asyncGenerators'
          ]
        });

        const astNotes = getNotes(ast, index);

        const duplicate = Object.keys(astNotes)
          .find(key => typeof collection[key] !== 'undefined');

        if (duplicate) {
          console.warn(`The ${key} was already used in notes. The duplicate was detected in ${folder}`);
        }

        return Object.assign(collection, astNotes);
      }, {});
    });

    await fs.writeFile(
      path.resolve('notes.json'),
      JSON.stringify(notes, null, 2),
      'utf8'
    );
  } catch (e) {
    console.error(e.stack);
  }
}

run();
