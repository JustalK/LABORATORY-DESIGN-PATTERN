class DefaultColor {
  constructor(name) {
    this.name = name;
  }

  infoColor() {
    return `I'm the color: ${this.name}`;
  }
}
module.exports = DefaultColor;
