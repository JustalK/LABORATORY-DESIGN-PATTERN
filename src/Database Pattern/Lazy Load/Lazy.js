const mongoose = require('mongoose')
const User = require('@src/Tools/dto/user')

class Lazy {
  constructor() {
    this.apply("N/A", "N/A", "N/A", "N/A")
  };

  async load(find) {
    const userLoaded = await User.findOne(find)
    this.apply(userLoaded._id, userLoaded.firstname, userLoaded.lastname, userLoaded.age)
  }

  apply(_id, firstname, lastname, age) {
    this._id = _id
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
  }
};

module.exports = Unit;
