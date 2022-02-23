const DefaultAbstract = require('../defaultAbstract');
const Type1 = require('../Type1');
const Color2 = require('../Color2');

class FactoryA extends DefaultAbstract {
  createType() {
    return new Type1();
  }

  createColor() {
    return new Color2();
  }
}

module.exports = FactoryA;
