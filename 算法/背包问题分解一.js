// 数组中有m个数,取n个
function knapsack(weights, values, w) {
  var n = weights.length - 1;//获取物品个数
  var f = [[]];//定义f的矩阵
  for (var j = 0; j <= w; j++) {
    if (j < weights[0]) {//容量当不下物品0的重量，价值为0
      f[0][j] = 0;
    } else {
      f[0][j] = values[0];//否则容量为物品0的价值
    }
  }
  for (var j = 0; j <= w; j++) {
    for (var i = 1; i <= n; i++) {
      if (!f[i]) {//创建新的一行
        f[i] = [];
      }
      if (j < weights[i]) {//容量小于商品重量
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  console.log(f);
  return f[n][w];
}
let weight = [4, 5, 6, 2, 2]
let value = [6, 4, 5, 3, 6]

// console.log(knapsack(weight, value, 10));
function getNumber(arr, num) {
  
  var r=[];
  (function f(t,a,n){
    if (n == 0) return r.push(t);
    for (var i=0,l=a.length; i<=l-n; i++) {
      f(t.concat(a[i]), a.slice(i+1), n-1);
    }
  })([],arr,num);
  return r;
}



var arr = [1,2,3,4]
var num = 2
console.log(getNumber(arr, num));