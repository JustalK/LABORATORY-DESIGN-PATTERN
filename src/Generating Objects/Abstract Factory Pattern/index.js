const FactoryA = require('./FactoryA');
const FactoryB = require('./FactoryB');

class FactoryProducer {
  create(type) {
    switch (type) {
      case 'FactoryA':
        return new FactoryA();
      case 'FactoryB':
        return new FactoryB();
      default: {
          console.log('Unknown Factory.');
      }
    }
  }
}

module.exports = new FactoryProducer();
