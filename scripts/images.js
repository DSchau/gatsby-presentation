const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const globby = require('globby');

const imageMap = {
  jpg: 'jpeg'
};

const getFiles = src => {
  return globby(path.join(src, '**/*.{jpg,jpeg,gif,png}')).then(files => {
    return files.filter(file => file.indexOf('-optimized') === -1);
  });
};

async function run() {
  try {
    const writeFile = ({ file, quality = 75, size = 1250 }) => {
      const [name, extension] = file
        .split('/')
        .pop()
        .split('.');
      const image = sharp(file);

      return image.metadata().then(metadata => {
        const fileName = file.replace(
          `${name}.${extension}`,
          `${name}-optimized.${extension}`
        );
        let stream;
        if (metadata.width > size) {
          stream = image
            .resize(size)
            [imageMap[extension] || extension]({ quality })
            .toFile(fileName);
        } else {
          stream = image
            .toBuffer()
            .then(buffer => fs.writeFile(fileName, buffer, 'binary'));
        }
        return stream.then(() => {
          console.log(`Updated ${fileName}`);
        });
      });
    };

    const files = await getFiles(path.resolve('src'));

    await Promise.all(
      files.map(file =>
        writeFile({
          file
        })
      )
    );
  } catch (e) {
    console.error(e.stack);
  }
}

run();
