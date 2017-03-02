function bubbleSort(arr){
  if (!arr){
    return arr;
  }
  var count = arr.length;
  while(count){
    for(var i = 0, j = 1; i < arr.length; i++, j++){
      var temp;
      if (arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    count--;
  }
  return arr;
}
