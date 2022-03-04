require('module-alias/register')
const test = require('ava');
const FamilyAssembler = require('@src/Database Pattern/Domain Object Assembler/FamilyAssembler');

const cases = (test) => {
  test('[Domain Object Assembler] Testing the DTOAssember', async t => {
    const Family = await new FamilyAssembler({ firstname: 'Robert' }, { firstname: 'Celine' });
    t.is(Family.firstnameBrother, "Robert");
    t.is(Family.firstnameSister, "Celine");
    t.is(Family.lastnameSister, "Dion");
  });
}

module.exports = {
  cases
}
