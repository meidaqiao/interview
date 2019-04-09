/**
 * Created by meitaiqiao on 2019/3/21.
 */
const p1 = new Promise(function (resolve, reject) {
  console.log('2秒之后，调用返回p1的reject给p2');
  setTimeout(reject, 3000, new Error('fail'))
})

const p2 = new Promise(function (resolve, reject) {
  console.log('1秒之后，调用p1');
  setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result)).catch(error => console.log(error))

