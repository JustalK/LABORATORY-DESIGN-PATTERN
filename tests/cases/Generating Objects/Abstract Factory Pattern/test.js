require('module-alias/register')
const test = require('ava');
const FactoryProducer = require('@src/Generating Objects/Abstract Factory Pattern');

const cases = (test) => {
  test('[AbstractFactoryPattern] Testing the creation', async t => {
    const factory1 = FactoryProducer.create('FactoryA');
    const typeA1 = factory1.createType();
    const colorB1 = factory1.createColor();

    const factory2 = FactoryProducer.create('FactoryB');
    const typeA2 = factory2.createType();
    const colorB2 = factory2.createColor();
  	t.is(typeA1.infoType(), "I'm the type: Type1");
    t.is(colorB1.infoColor(), "I'm the color: Color2");
  	t.is(typeA2.infoType(), "I'm the type: Type2");
    t.is(colorB2.infoColor(), "I'm the color: Color1");
  });
}

module.exports = {
  cases
}
