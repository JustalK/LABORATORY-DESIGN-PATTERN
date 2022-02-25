require('module-alias/register')
const test = require('ava');
const FactoryPattern = require('@src/Generating Objects/Factory Pattern');

const cases = (test) => {
  test('[FactoryPattern] Testing the creation', async t => {
    const rsl1 = FactoryPattern.create('Type1');
    const rsl2 = FactoryPattern.create('Type2');
  	t.is(rsl1.info(), "I'm Type1");
    t.is(rsl2.info(), "I'm Type2");
  });
}

module.exports = {
  cases
}
