const fs = require('fs');

exports.save = (notes) => {
  fs.writeFileSync('./notes-data.json', JSON.stringify(notes));
};

exports.load = () => JSON.parse(fs.readFileSync('./notes-data.json', 'utf8'));
