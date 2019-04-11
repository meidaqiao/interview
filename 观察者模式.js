/*
* 最简单的观察者模式
要指定一个发布者；
给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者；（这家公司很多人来应聘）
最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数；（你up or 你over）
* */
var event = {}; //发布者
event.clientlist = []; //订阅者

event.listen = function (fn) {
    this.clientlist.push(fn)
};
event.trigger = function () {
    for (var i = 0; i < this.clientlist.length; i++) {
        var fn = this.clientlist[i]
        fn.apply(this, arguments)
    }
};
event.listen(function (time) {
    console.log('正式上班时间' + time);
});
event.trigger('2019/04/11');
var uname = 'jack'
function change() {
    alert(uname)
    var uname = 'lily'
    alert(uname)
    function uname() {}
    alert(uname)
}
change()

var uname = 'jack'
function change() {
    alert(uname)
    var uname = 'lily'
    alert(uname)
}
change()


var uname = 'jack'
function change() {
    var uname= undefined
    alert(uname)
    uname = 'lily'
    alert(uname)
}
change()