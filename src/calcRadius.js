/**
 * 
 * @param {Number} tntWeight 
 */

let radius = (tntWeight) => {
  // 环境压强 P0 = 101300
  // 重伤：P1 = 0.4344 z=1.089057440443465
  // 轻伤： P1 = 0.168 z=1.95550803263784
  // 财产损失： k = 5.6 
  //0.4344+0.019
  let p0 = 1.013e5;
  let z1 = 1.089057440443465;
  let z2 = 1.95550803263784;
  let k = 5.6;
  let e = tntWeight * 4500;
  let r0 = (Math.pow(tntWeight / 1000, 0.37) * 13.6).toFixed(2);
  let r1 = (Math.pow(e * 1000 / p0, 1 / 3) * z1).toFixed(2);
  let r2 = (Math.pow(e * 1000 / p0, 1 / 3) * z2).toFixed(2);
  let r3 = (k * Math.pow(tntWeight, 1 / 3) / (Math.pow(1 + (3175 / tntWeight) * 2, 1 / 6))).toFixed(2);
  return {
    r0,
    r1,
    r2,
    r3
  }
}

module.exports.default = module.exports = radius;