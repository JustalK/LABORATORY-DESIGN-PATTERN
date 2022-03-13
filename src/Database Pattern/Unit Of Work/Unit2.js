const mongoose = require('mongoose')
const User = require('@src/Tools/dto/user')

class Unit2 {
  async transaction() {
    try {
      const update = await User.bulkWrite([
        insertOne: {
          document: {
            firstname: 'C',
            lastname: 'C',
            age: 22
          }
        },
        insertOne: {
          document: {
            firstname: 'D',
            lastname: 'D',
            age: 23
          }
        }
      ]);
    } catch (error) {
      console.log(error)
    }
  }
};

module.exports = Unit2;
