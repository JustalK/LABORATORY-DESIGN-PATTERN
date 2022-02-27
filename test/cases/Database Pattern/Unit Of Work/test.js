require('module-alias/register')
const test = require('ava');
const Unit = require('@src/Database Pattern/Unit Of Work/Unit');
const User = require('@src/Tools/dto/user')

const cases = (test) => {
  test('[UnitOfWork] Testing the unit of work', async t => {
    const userToCreate = {
      firstname: 'A',
      lastname: 'A',
      age: 10
    }
    const userToLink = await User.create({
      firstname: 'B',
      lastname: 'B',
      age: 10
    });
    const Transaction = new Unit();
    await Transaction.transaction(userToCreate, userToLink);
    const userA = await User.find({ firstname: 'A' });
    const userB = await User.find({ firstname: 'B' });
    t.is(userB.relation, userA._id);
  });

  test('[UnitOfWork] Testing the unit of work fail', async t => {
    const userToCreate = {
      firstname: 'A',
      lastname: 'A',
      age: 10
    }
    const Transaction = new Unit();
    await Transaction.transaction(userToCreate, null);
    const userA = await User.findOne({ firstname: 'A' });
    const userB = await User.findOne({ firstname: 'B' });
    t.is(userA, null);
  });
}

module.exports = {
  cases
}
