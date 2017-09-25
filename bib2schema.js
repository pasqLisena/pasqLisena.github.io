const fs = require('fs-extra');
const path = require('path');
const dir = require('node-dir');
const bib2json = require('bib2json');
require('array-prototype-last');

const SOURCE = path.join(__dirname, 'publications');
const DEST = '_data/publications';

fs.ensureDirSync(DEST);

dir.readFiles(SOURCE, {
    match: /.bib$/
  }, onFileRead,
  onComplete);

function onFileRead(err, content, filename, next) {
  if (err) throw err;
  console.log(filename);
  let parser = new bib2json((entry) => onBibParsed(entry, filename));
  parser.parse(content);
  next();
}

function onBibParsed(entry, filename) {
  let destFile = filename.split('/').last.replace('.bib', '.json');
  let dest = path.join(DEST, destFile);
  let content = toSchema(entry);
  fs.writeFile(dest, JSON.stringify(content, null, 2), (err) => {
    if (err) return console.error(err);
  });
}

const MAPPING = {
  url: 'url',
  author: {
    value: 'author',
    split: ' and '
  },
  title: 'name',
  year: 'copyrightYear',
  booktitle: 'isPartOf',
  keywords: {
    value: 'keywords',
    split: ', '
  }
};

function toSchema(entry) {
  let s = {
    "@context": "http://schema.org",
    "@type": "ScholarlyArticle"
  };

  let fields = entry.Fields;
  Object.keys(fields).forEach((k) => {
    let m = MAPPING[k];
    if (!m) return;
    let p = m.value || m;

    let v = fields[k];
    if (m.hasOwnProperty('split'))
      v = v.split(m.split);

    s[p] = v;
  });

  return s;
}

function onComplete(err, files) {
  if (err) throw err;
  console.log('finished reading files.');
}
