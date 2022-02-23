class FactoryAbstract {
  constructor() {
    if (this.constructor === FactoryAbstract) {
      throw new TypeError('Abstract class "FactoryAbstract" cannot be instantiated directly');
    }
  }

  createType() {
    throw new Error('You must implement this function');
  }

  createColor() {
    throw new Error('You must implement this function');
  }
}

module.exports = FactoryAbstract;
