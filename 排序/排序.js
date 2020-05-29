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
// var elements = [3,1,4,2,2,5,8,9,7,19,13,12]
// console.log(elements);
// var b = [3,1,4,2,5,8,9,7,19,13,12].sort(function (a,b) {
//     return b-a
// })
// console.log(sort(elements));

// 快排
function quickSort(arr, i, j) {
    if(i < j) {
      let left = i;
      let right = j;
      let pivot = arr[left];
      while(i < j) {
        while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
          j--;
        }
        if(i < j) {
          arr[i++] = arr[j];
        }
        while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
          i++;
        }
        if(i < j) {
          arr[j--] = arr[i];
        }
      }
      arr[i] = pivot;
      quickSort(arr, left, i-1);
      quickSort(arr, i+1, right);
      return arr;
    }
  }
  
  // example
  let arr = [36, 3, 29, 43, 30, 20, 41, 37, 24, 42];
  console.log(quickSort(arr, 0 , arr.length-1));