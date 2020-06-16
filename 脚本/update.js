const readline = require('readline');
//Readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。使用require(“readline”)可以引用模块。
const fs = require('fs');
const r1 = readline.createInterface({
  input: fs.createReadStream("update.txt")
});
var i = 1; //txt中的行数
var arr = []
r1.on('line', function(line){ //事件监听
    console.log(line.split(",")[0].split(":")[1])
    var name = line.split(",")[0].split(":")[1]
    let item = {
        "compName": name,
        "version": line.split(",")[1].split(":")[1]
    }
    arr.push(item)
　　i+=1;
})
setTimeout(() => {
    console.log(arr)
},1000)

var arr = []
[ { compName: ' pinyinDrag', version: ' 1.0.1045' },
  { compName: ' drag_full_screen', version: ' 1.0.1046' },
  { compName: ' touch_children_song', version: ' 1.0.1047' },
  { compName: ' drag_full_screen', version: ' 1.0.1048' },
  { compName: ' poetryReadingPro', version: ' 1.0.1049' },
  { compName: ' poetryReadingPlus', version: ' 1.0.1050' },
  { compName: ' poetryReadingPro', version: ' 1.0.1051' },
  { compName: ' huiben_chakan', version: ' 1.0.1052' },
  { compName: ' poetryReadingPro', version: ' 1.0.1053' },
  { compName: ' poetryReadingPro', version: ' 1.0.1055' },
  { compName: ' poetryReadingPro', version: ' 1.0.1056' },
  { compName: ' select_half_h', version: ' 1.0.1058' },
  { compName: ' ji_zhang', version: ' 1.0.1059' },
  { compName: ' emptyProject_h', version: ' 1.0.1060' },
  { compName: ' emptyProject_v', version: ' 1.0.1061' },
  { compName: ' gushigendu_ttf', version: ' 1.0.1062' },
  { compName: ' huiben_gendu', version: ' 1.0.1063' },
  { compName: ' chuangguan_l1', version: ' 1.0.1064' },
  { compName: ' gushigendu_ttf', version: ' 1.0.1065' },
  { compName: ' huiben_chakan', version: ' 1.0.1066' },
  { compName: ' huiben_gendu', version: ' 1.0.1067' },
  { compName: ' huiben_gendu', version: ' 1.0.1068' },
  { compName: ' drag_full_screen', version: ' 1.0.1069' },
  { compName: ' drag_full_screen', version: ' 1.0.1070' },
  { compName: ' gushigendu_ttf', version: ' 1.0.1071' },
  { compName: ' gushigendu', version: ' 1.0.1072' },
  { compName: ' emptyProject_v', version: ' 1.0.1074' },
  { compName: ' emptyProject_h', version: ' 1.0.1075' } ].forEach(
    function(item){                
        db.components.update({"compName":"koushu_l1"},{$set:{"type":"001"}})
    }
 )
 