let power = (weight, isTransTNT = true) => {
  if (isTransTNT) {
    return weight * 1.8 * 4520 * 0.04;
  }
  return weight * 4520;
};

module.exports.default = module.exports = power;