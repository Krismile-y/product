// data 格式
// var data = {
//   '24,12,31': {
//     price: 366.0,
//     stock: 46,
//   },
//   '25,12,32': {
//     price: 406,
//     stock: 66,
//   },
// };

class SKU {
  constructor(data) {
    this.SKU = {};
    this.init(data);
  }
  init(data) {
    var i = 0,
      j,
      l,
      skuKeyArr = Object.keys(data), // 可以看成可行路径 取得所有可行路径组成集合
      len = skuKeyArr.length,
      skuKey, // 原始数据里面的一条SKU数据的键
      skuValue, // 原始数据里面的一条SKU数据的值
      skuKeyArrs, // 原始数据里面的一条SKU数据的键返回的新的数组[1,2,3,4]
      combinationArr; // 排列组合返回的所有可行路径

    for (; i < len; i++) {
      skuKey = skuKeyArr[i];
      skuValue = data[skuKey];
      console.log('1243', skuValue);
      skuKeyArrs = skuKey.split(',');
      skuKeyArrs.sort(function(value1, value2) {
        return (value1 >> 0) - (value2 >> 0);
      });
      // 进入combination方法里面的参数[1,2,3,4]
      // 对每个SKU信息key属性值进行拆分组合 返回 [ [1],[2],[3],[4], [1,2],[1,3],[1,4],[2,3],[2,4],[3,4], [1,2,4],[1,3,4],[2,3,4],[1,2,3] ]
      combinationArr = this.combination(skuKeyArrs);
      //console.log(combinationArr);
      l = combinationArr.length;
      for (j = 0; j < l; j++) {
        this.add(combinationArr[j], skuValue);
      }
      //结果全组合放入SKU 由于在拆分组合的时候没有生成4个元素组合所以放到这一步了
      this.SKU[skuKeyArrs.join(',')] = {
        stock: skuValue.stock,
        prices: [skuValue.price],
        vipPrice: [skuValue.vip_price],
      };
    }
    console.log('=>', this.SKU);
    return this.SKU;
  }
  // 返回生成的排列组合
  combination(arr) {
    var a = this.create(arr, 1),
      b = this.create(arr, 2),
      c = this.create(arr, 3),
      result = c.concat(a).concat(b);
    return result;
  }
  // 核心方法 排列组合 组合中没有重复的组合 排列中有重复的组合(顺序不一样)
  create(arr, num) {
    var result = [];
    (function fn(newArr, arr, n) {
      if (n == 0) {
        return result.push(newArr);
      }
      for (var i = 0, len = arr.length; i <= len - n; i++) {
        fn(newArr.concat(arr[i]), arr.slice(i + 1), n - 1);
      }
    })([], arr, num);
    return result;
  }
  add(arr, sku) {
    var key = arr.join(',');
    if (this.SKU[key]) {
      this.SKU[key].stock += sku.stock;
      this.SKU[key].prices.push(sku.price);
      this.SKU[key].vipPrice.push(sku.vip_price);
    } else {
      this.SKU[key] = {
        stock: sku.stock,
        prices: [sku.price],
        vipPrice: [sku.vip_price],
      };
    }
  }
}

export default SKU;
