const DefaultAbstract = require('./defaultAbstract');

class DefaultType extends DefaultAbstract {
  constructor(name) {
    super();
    this.name = name;
  }

  info() {
    return `I'm ${this.name}`;
  }
}
module.exports = DefaultType;
