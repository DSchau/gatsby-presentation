const path = require('path');
const fs = require('fs-extra');

const base = path.resolve('blog-post');
const screenshotsPath = path.resolve(path.join(base, 'images'));

async function run() {
  try {
    const screenshots = await fs
      .readdir(screenshotsPath)
      .then(files =>
        files.filter(
          file =>
            /^\w.+\.(png|jpe?g)$/.test(file) &&
            fs.statSync(path.join(screenshotsPath, file)).isFile()
        )
      );

    const notes = require(path.resolve('notes.json'));

    const post = screenshots
      .reduce((elements, shot, index) => {
        const title = shot
          .split('.')
          .shift()
          .split('-')
          .slice(1)
          .join('-');
        const noteTitles = Object.keys(notes);
        const note = notes[title] || notes[noteTitles[index]] || '';
        if (!note) {
          console.warn(`The slide ${title} did not have corresponding notes.`);
        }
        elements = elements.concat([
          note,
          '',
          `![${title.replace(/-/g, ' ')}](./images/${shot})`,
          ''
        ]);
        return elements;
      }, [`
---
date: "${new Date().toJSON()}"
title: "GraphQL: Most of the Parts"
tags:
  - graphql
  - react
  - node
excerpt: In this post, I'll do a deep dive on most of the parts of GraphQL. I'll start with the foundational concepts and then from this foundational basis I'll construct the value of GraphQL and illustrate how it could be a hugely transformative technology for server and client communication.
---
      `.trim()])
      .join('\n');

    await fs.writeFile(path.join(base, 'index.md'), post, 'utf8');
  } catch (e) {
    console.error(e.stack);
  }
}

run();
