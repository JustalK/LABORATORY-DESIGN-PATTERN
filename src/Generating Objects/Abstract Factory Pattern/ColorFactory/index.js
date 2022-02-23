const Color1 = require('../Color1');
const Color2 = require('../Color2');

class ColorFactory {
  create(Color) {
    switch (Color) {
      case 'Color1':
        return new Color1();
      case 'Color2':
        return new Color2();
      default: {
          console.log('Unknown Color.');
      }
    }
  }
}

module.exports = ColorFactory;
