class DefaultColor {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `I'm the type: ${this.name}`;
  }
}
module.exports = DefaultColor;
