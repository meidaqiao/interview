/*
* 冒泡
* */
function sort(arr) {
    for (var i = 0; i < arr.length-1;i++){
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        } 
    }
    return arr
}
var elements = [3,1,4,2,2,5,8,9,7,19,13,12]
console.log(elements);
// var b = [3,1,4,2,5,8,9,7,19,13,12].sort(function (a,b) {
//     return b-a
// })
console.log(sort(elements));