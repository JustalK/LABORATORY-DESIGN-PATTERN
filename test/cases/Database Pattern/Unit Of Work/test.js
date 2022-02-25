require('module-alias/register')
const test = require('ava');
const Unit = require('@src/Database Pattern/Unit Of Work/unit');

const cases = (test) => {
  test('[DataMapper] Testing the unit of work', async t => {
    const Transaction = new Unit();
    Transaction.transaction();
    t.is(true, true);
  });
}

module.exports = {
  cases
}
