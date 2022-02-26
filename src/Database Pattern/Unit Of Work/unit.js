const mongoose = require('mongoose')
const User = require('@src/Tools/dto/user')

class Unit {
  async transaction() {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const userA = await User.create({
        firstname: 'A',
        lastname: 'A',
        age: 10
      });
      await User.create({
        firstname: 'B',
        lastname: 'B',
        age: 10,
        relation: userA._id
      });
    	await session.commitTransaction();
    } catch (error) {
    	await session.abortTransaction();
    	throw error;
    } finally {
    	session.endSession();
    }
  }
};

module.exports = Unit;
