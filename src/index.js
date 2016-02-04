/**
 * @function getRandomValueInRange
 * @param {float} min
 * @param {float} max
 * @param {boolean} [round = false]
 * @returns {float|int}
 */
export function getRandomValueInRange(min, max, round = false) {
  let value = Math.random() * (max - min) + min;
  return round ? Math.round(value) : value;
}

/**
 * @function random
 * @alias getRandomValueInRange
 */
export const random = getRandomValueInRange;

/**
 * @function mapValueToRange
 * @param {float} value
 * @param {float} inMin
 * @param {float} inMax
 * @param {float} outMin
 * @param {float} outMax
 * @returns {float}
 */
export function mapValueToRange(value, inMin, inMax, outMin, outMax) {
  if(value < inMin) {
    return outMin;
  }

  if(value > inMax) {
    return outMax;
  }

  return (value - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

/**
 * @function map
 * @alias mapValueToRange
 */
export const map = mapValueToRange;

/**
 * @function isPowerOfTwo
 * @param {float} value
 * @returns {boolean}
 */
export function isPowerOfTwo(value) {
 return value !== 0 && (value & (value - 1)) === 0;
}

/**
 * @function isPOT
 * @alias isPowerOfTwo
 */
export const isPOT = isPowerOfTwo;

