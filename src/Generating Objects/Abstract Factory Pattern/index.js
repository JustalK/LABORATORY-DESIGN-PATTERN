const TypeFactory = require('./TypeFactory');
const ColorFactory = require('./ColorFactory');

class FactoryProducer {
  create(type) {
    switch (type) {
      case 'Type':
        return new TypeFactory();
      case 'Color':
        return new ColorFactory();
      default: {
          console.log('Unknown Factory.');
      }
    }
  }
}

module.exports = new FactoryProducer();
