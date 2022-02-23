class DefaultType {
  constructor(name) {
    this.name = name;
  }

  infoType() {
    return `I'm the type: ${this.name}`;
  }
}
module.exports = DefaultType;
