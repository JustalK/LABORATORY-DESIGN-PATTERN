class DefaultType {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `I'm ${this.name}`;
  }
}
module.exports = DefaultType;
