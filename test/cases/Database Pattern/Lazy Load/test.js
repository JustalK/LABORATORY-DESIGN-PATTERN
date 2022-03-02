require('module-alias/register')
const test = require('ava');
const LazyUser = require('@src/Database Pattern/Lazy Load/LazyUser');

const cases = (test) => {
  test('[LazyUser] Testing the lazy load of user', async t => {
    const User = new LazyUser();
    t.is(User._id, "N/A");
    t.is(User.firstname, "N/A");
    t.is(User.lastname, "N/A");
    t.is(User.age, "N/A");
    // Do something with user
    await User.load({ firstname: 'Robert' });
    t.is(User.firstname, "Robert");
    t.is(User.lastname, "De Niro");
    t.is(User.age, 19);
  });
}

module.exports = {
  cases
}
