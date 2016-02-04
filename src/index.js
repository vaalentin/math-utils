/**
 * @function getRandomValueInRange
 * @param {float} min
 * @param {float} max
 * @param {boolean} [round = false]
 * @returns {float|int}
 */
export function getRandomValueInRange(min, max, round = false) {
  let val = Math.random() * (max - min) + min;
  return round ? Math.round(val) : val;
}

export const random = getRandomValueInRange;

/**
 * @function mapValueToRange
 * @param {float} val
 * @param {float} inMin
 * @param {float} inMax
 * @param {float} outMin
 * @param {float} outMax
 * @returns {float}
 */
export function mapValueToRange(val, inMin, inMax, outMin, outMax) {
  if(val < inMin) {
    return outMin;
  }

  if(val > inMax) {
    return outMax;
  }

  return (val - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

export const map = mapValueToRange;

