const test = require('ava');
const SingletonPattern = require('../../../src/Generating Objects/Singleton Pattern');

test('[SingletonPattern] Testing the singularity', async t => {
  const rsl1 = SingletonPattern.getInstance();
  const rsl2 = SingletonPattern.getInstance();
	t.is(rsl1, rsl2);
});

test('[SingletonPattern] Testing the only public function', async t => {
  const rsl1 = SingletonPattern.getInstance();
	t.is(rsl1.print(), 'I am a Singleton Pattern.');
});
