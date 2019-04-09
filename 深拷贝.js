/*
* 测试 undefined,function,symbol
* */
var a = {
    b:undefined,
    c:null,
    d:[1,2,3,4]
}
for (var i in a){
    console.log(i);
}
var b = JSON.parse(JSON.stringify(a))
console.log(b);