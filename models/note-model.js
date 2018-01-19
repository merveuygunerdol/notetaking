module.exports = class Note {
  constructor(title, body) {
    this.title = title,
    this.body = body;
  }
  printTitle() {
    console.log(this.title);
  }
  printBody() {
    console.log(this.body);
  }
  static create(obj) {
    return new Note(obj.title, obj.body);
  }
};
