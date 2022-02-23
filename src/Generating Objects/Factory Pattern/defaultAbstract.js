class DefaultAbstract {
  constructor() {
    if (this.constructor === DefaultAbstract) {
      throw new TypeError('Abstract class "DefaultAbstract" cannot be instantiated directly');
    }
  }

  info() {
    throw new Error('You must implement this function');
  }
}

module.exports = DefaultAbstract;
