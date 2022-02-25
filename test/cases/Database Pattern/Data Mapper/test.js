require('module-alias/register')
const test = require('ava');
const MapperDataUser = require('@src/Database Pattern/Data Mapper/MapperUser');

const cases = (test) => {
  test('[DataMapper] Testing the mapping of data on user with creation', async t => {
    const MapperUser = new MapperDataUser();
    const user_add = await MapperUser.add({
      firstname: 'Ava',
      lastname: 'Longoria',
      age: 10
    });
    t.is(user_add.firstname, 'Ava');
    t.is(user_add.lastname, 'Longoria');
    t.is(user_add.age, 10);
  });

  test('[DataMapper] Testing the mapping of data on user with getting', async t => {
    const MapperUser = new MapperDataUser();
    const users = await MapperUser.getAll();
    t.is(users.length, 2);
  });
}

module.exports = {
  cases
}
