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

test('isPowerOfTwo', ({ test }) => {
  test('should tell if a number if a power of two', t => {
    t.plan(1);

    const { isPowerOfTwo } = utils;

    const multiples = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

    for(let i = 0; i < 4097; i++) {
      const value = isPowerOfTwo(i); 
      const expected = multiples.indexOf(i) === -1 ? false : true;

      if(value !== expected) {
        return t.fail(`${i}, expected: ${expected}, value: ${value}`);
      }
    }

    t.pass('ok');
  })
});

