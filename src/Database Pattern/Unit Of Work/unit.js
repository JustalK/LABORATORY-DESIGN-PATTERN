const mongoose = require('mongoose')

class Unit {
  async transaction() {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
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
