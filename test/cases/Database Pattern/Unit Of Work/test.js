require('module-alias/register')
const test = require('ava')
const Unit = require('@src/Database Pattern/Unit Of Work/Unit')
const Unit2 = require('@src/Database Pattern/Unit Of Work/Unit2')
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

  test('[UnitOfWork] Testing the unit of work 2', async t => {
    const Transaction = new Unit2();
    await Transaction.transaction();
    const userRobert = await User.findOne({ firstname: 'Robert' });
    const userC = await User.findOne({ firstname: 'C' });
    const userD = await User.findOne({ firstname: 'D' });
    t.is(userRobert.firstname, 'Robert');
    t.is(userRobert.age, 50);
    t.is(userC.lastname, 'C');
    t.is(userC.age, 22);
    t.is(userD.firstname, 'D');
    t.is(userD.lastname, 'D');
    t.is(userD.age, 23);
  });
}

module.exports = {
  cases
}
