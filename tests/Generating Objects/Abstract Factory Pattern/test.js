const test = require('ava');
const FactoryProducer = require('../../../src/Generating Objects/Abstract Factory Pattern');

test('[FactoryPattern] Testing the creation', async t => {
  const factory1 = FactoryProducer.create('Type');
  const type = factory1.create('Type1')

  const factory2 = FactoryProducer.create('Color');
  const color = factory2.create('Color2')
	t.is(type.info(), "I'm the type: Type1");
  t.is(color.info(), "I'm the color: Color2");
});
