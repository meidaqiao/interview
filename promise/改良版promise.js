/**
 * Created by meitaiqiao on 2019/3/21.
 */
function promise(fn) {
  var status = 'pending'
  var successThenArr = []
  var failThenArr = []
  function successNotify() {
    status = 'fulfilled'
    toDoThen.apply(undefined,arguments)
  }
  function failNotify() {
    status = 'rejected'
    toDoThen.apply(undefined,arguments)
  }
  function toDoThen() {
    setTimeout( () => {
      if (status === 'fulfilled') {
        for (var i = 0;i < successThenArr.length;i++){
          successThenArr[i].apply(undefined,arguments)
        }
      }else if (status === 'rejected') {
        for (var i = 0;i < failThenArr.length;i++){
          failThenArr[i].apply(undefined,arguments)
        }
      }
    })
  }
  this.then = function (success,fail) {
    successThenArr.push(success)
    failThenArr.push(fail)
    return this
  }
  fn.call(undefined,successNotify,failNotify)
}