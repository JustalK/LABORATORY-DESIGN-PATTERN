const test = require('ava');
const MapperDataUser = require('../../../src/Database Pattern/Data Mapper/MapperUser');

test('[DataMapper] Testing the mapping of data on user', async t => {
  const MapperUser = new MapperDataUser();
  const user_add = MapperUser.add();
  const user_delete = MapperUser.delete();
  const user_search = MapperUser.search();
  t.is(user_add.info, '[Add] Kevin');
  t.is(user_delete.info, '[Delete] Kevin');
  t.is(user_search.info, '[Search] Kevin');
});
