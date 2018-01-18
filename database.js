const fs = require('fs');

exports.save = (notes, cb) => {
  fs.writeFile('./notes-data.json', JSON.stringify(notes), cb);
};

exports.load = () => JSON.parse(fs.readFileSync('./notes-data.json', 'utf8'));
