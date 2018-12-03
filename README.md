# TNT

## Usage

``` js
  //tntRadius(TNT重量)
  const tntRadius = require('./calcRadius')
  // return {r0, r1, r2, r3}

  //tntWeight(转换物质重量, 转换物质燃烧热/爆热,是否是固体物质[固体爆热，液体气体燃烧热] = true)
  const tntWeight = require('./calcTNT')

  //tntPower(TNT重量, 是否是转换的TNT重量 = false)
  const tntPower = require('./calcPower')

  let weight = 1;
  let calcWeight = tntWeight(weight, 4520, 1)
  console.log(`折合TNT含量：${calcWeight}千克`)
  console.log(`爆炸总能量：${tntPower(calcWeight)}kj`)
  console.log(`折合TNT总能量：${tntPower(calcWeight, false)}kj`)
  console.log(`爆炸死亡半径：${tntRadius(calcWeight).r0}米`)
  console.log(`爆炸重伤半径：${tntRadius(calcWeight).r1}米`)
  console.log(`爆炸轻伤半径：${tntRadius(calcWeight).r2}米`)
  console.log(`爆炸损失半径：${tntRadius(calcWeight).r3}米`)
```

## 常见凝聚相含能材料爆炸炸药的爆热

物质名|爆热(kj/kg)|
-- | --| --|
TNT|4520
硝化甘油|6700
黑索今（ROX）|5630
太安（PETN）|5800
B炸药（60%RDX,40%TNT）|5190
喷托里特（50%PETN，5%TNT）|5110
C-4炸药（91%RDX,9%塑料粘接剂）|4870
苦味酸|4180
奥克托今（HMX）|5680
叠氮化银|1890
叠氮化铅|1540
特屈儿|4520
斯蒂芬酸铅|1910
奥克托尔（50%TNT，30%HMX）|4500
雷汞|1790

## 部分物质的燃烧热

物质名|燃烧热(kj/kg)|
-- | --| --|
汽油 |44000
甲苯|42381
丙烯腈|33127
甲醇|22690
甲醛|78088
苯|41792
苯乙烯|42029
丙烷|50290
溴甲烷|8101
二硫化碳|13538