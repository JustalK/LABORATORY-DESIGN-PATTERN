require('module-alias/register')
const test = require('ava');
const Unit = require('@src/Database Pattern/Unit Of Work/unit');
const User = require('@src/Tools/dto/user')

const cases = (test) => {
  test('[UnitOfWork] Testing the unit of work', async t => {
    const Transaction = new Unit();
    await Transaction.transaction();
    const userA = await User.find({ firstname: 'A' });
    const userB = await User.find({ firstname: 'B' });
    t.is(userB.relation, userA._id);
  });
}

module.exports = {
  cases
}
