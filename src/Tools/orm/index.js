const User = require('../dto/user');

class ORM {
  constructor(model) {
    this.model = model;
  }

  get(id) {
    return new this.model.find({ id });
  }

  add(user) {
    return new this.model.create(user);
  }

  search(find) {
    return new this.model.find();
  }
}

module.exports = ORM;
