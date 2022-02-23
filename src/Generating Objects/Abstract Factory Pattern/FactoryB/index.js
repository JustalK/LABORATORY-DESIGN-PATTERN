const DefaultAbstract = require('../defaultAbstract');
const Type2 = require('../Type2');
const Color1 = require('../Color1');

class FactoryA extends DefaultAbstract {
  createType() {
    return new Type2();
  }

  createColor() {
    return new Color1();
  }
}

module.exports = FactoryA;
