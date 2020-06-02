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