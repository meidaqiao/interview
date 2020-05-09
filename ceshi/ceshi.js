const readline = require('readline');
//Readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。使用require(“readline”)可以引用模块。
const fs = require('fs');
const r1 = readline.createInterface({
  input: fs.createReadStream("ceshi.txt")
});
var i = 1; //txt中的行数
var arr = []
r1.on('line', function(line){ //事件监听
    // console.log('Line from file:' + i + ":" + line);
    let item = {
        "compName": line,
        "version": "1.0"
    }
    arr.push(item)
　　i+=1;
})
setTimeout(() => {
    console.log(arr)
},1000)
