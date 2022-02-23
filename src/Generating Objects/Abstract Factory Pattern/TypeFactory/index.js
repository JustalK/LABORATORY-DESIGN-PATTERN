const Type1 = require('../Type1');
const Type2 = require('../Type2');

class TypeFactory {
  create(type) {
    switch (type) {
      case 'Type1':
        return new Type1();
      case 'Type2':
        return new Type2();
      default: {
          console.log('Unknown type.');
      }
    }
  }
}

module.exports = TypeFactory;
