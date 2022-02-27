const mongoose = require('mongoose')
const User = require('@src/Tools/dto/user')

class Unit {
  async transaction(userToCreate, userToLink) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const userA = await User.insertOne(userToCreate, { session });
      await User.updateOne({ _id: userToLink._id }, { $set: { relation: userA._id } }, { session })
    	await session.commitTransaction();
    } catch (error) {
    	await session.abortTransaction();
    } finally {
    	session.endSession();
    }
  }
};

module.exports = Unit;
