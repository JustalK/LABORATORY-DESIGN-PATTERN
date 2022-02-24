const User = require('../dto/user');

class ORM {
  constructor(model) {
    this.model = model;
  }

  get() {
    return new this.model('[Get] Kevin');
  }

  add() {
    return new this.model('[Add] Kevin');
  }

  delete() {
    return new this.model('[Delete] Kevin');
  }

  search() {
    return new this.model('[Search] Kevin');
  }
}

module.exports = ORM;
