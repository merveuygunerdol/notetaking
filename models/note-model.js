module.exports = class Note {
  constructor(id, title, body) {
    this.id = id;
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
    return new Note(obj.id, obj.title, obj.body);
  }
};
