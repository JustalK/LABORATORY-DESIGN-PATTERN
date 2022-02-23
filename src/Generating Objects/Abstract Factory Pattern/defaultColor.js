class DefaultType {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `I'm the color: ${this.name}`;
  }
}
module.exports = DefaultType;
