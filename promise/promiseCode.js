/**
 * Created by meitaiqiao on 2019/3/25.
 */
/**
* function machine(){}
*
 * machine('ygy').execute()
 *
 * machine('ygy').do('eat').execute()
 *
 * start ygy
 * ygy eat
 *
 * machine('ygy').wait(5).do('eat').execute()
 *
 * start ygy
 * wait 5s(等待5s)
 * ygy eat
 *
 * machine('ygy').waitFirst(5).do('eat').execute()
 *
 * wait 5s
 * start ygy
 * ygy eat
 *
* */
function machine(name) {
  if(!(this instanceof machine)){
    return new machine(name)
  }
  this.name = name
  this.dolist = []
  this.dolist.push(`start ${name}`)
}
machine.defer = function (time) {
  const times= time
  return function () {
    console.log(`wait ${times}`)
    return new Promise((resolve) => {
      setTimeout(() => {resolve()},times * 1000)
    })
  }
}
machine.prototype.execute = async function () {
  const doSomething = this.dolist
  console.log(doSomething);
  for(var i=0; i<doSomething.length; i++){
    if(typeof(doSomething[i]) === 'function'){
      await doSomething[i]()
    }else {
      console.log(doSomething[i])
    }
  }
}
machine.prototype.do = function (thing) {
  this.dolist.push(`${this.name} ${thing}`)
  return this
}
machine.prototype.wait = function (item) {
  this.dolist.push(machine.defer(item))
  return this
}
machine.prototype.waitFirst = function (item) {
  this.dolist.unshift(machine.defer(item))
  return this
}

// machine('ygy').execute();
// machine('ygy').do('eat').execute()
machine('ygy').wait(5).do('eat').execute()

// machine('ygy').waitFirst(5).do('eat').execute()