import test from 'tape';
import isInteger from 'is-integer';
import * as utils from '../src/';

test('get random value in range', ({ test }) => {
  test('should returns a random value within a min and max value', t => {
    t.plan(1);

    const { getRandomValueInRange } = utils;

    const min = -Math.random() * 100;
    const max = Math.random() * 100;

    for(let i = 0; i < 100; i++) {
      const value = getRandomValueInRange(min, max);
      if(value < min || value > max) {
        t.fail();
      }
    }

    t.pass();
  });
  
  test('should returns a random rounded value within a min and max value', t => {
    t.plan(1);

    const { getRandomValueInRange } = utils;

    const min = -Math.random() * 100;
    const max = Math.random() * 100;

    for(let i = 0; i < 100; i++) {
      const value = getRandomValueInRange(min, max, true);
      if(!isInteger(value) || value < min || value > max) {
        t.fail();
      }
    }

    t.pass();
  });
});

test('map value to range', t => {
  t.plan(1);

  const { mapValueToRange } = utils;

  for(let i = 0; i < 100; i++) {
    const val = mapValueToRange(i, 0, 100, 0, 1);
    if(val !== i / 100) {
      t.fail();
    }
  }

  t.pass();
});

