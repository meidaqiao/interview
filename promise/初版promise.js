/**
 * Created by meitaiqiao on 2019/3/21.
 */
function promise1(fn) {
  var value = null
  var callbacks = []

  this.then = function (fulfilled) {
    callbacks.push(fulfilled)
    return this
  }

  function resolve(value) {
    setTimeout(function () {
      callbacks.forEach(function (callback) {
        callback(value)
      })
    },0)
  }

  fn(resolve);
}

new promise1(function (resolve) {
  setTimeout(function () {
    resolve(1)
  },5000)
}).then(function (d) {
  console.log(d);
})