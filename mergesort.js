function mergeSort(arr){
    //console.log('arr log:', arr)
    if(arr.length < 2) {return arr}
        // var splitArr = split(arr);
        // //console.log('splitArr is:',splitArr)
        // //var sorted = merge(splitArr[0], splitArr[1])
    var left = split(arr)[0];
    var right = split(arr)[1]
    //console.log('sorted log:', sorted);
    return merge(mergeSort(left),mergeSort(right));
}

function split(wholeArray) {
    //console.log('split log:', wholeArray)
    var firstHalf = wholeArray.slice(0,Math.floor(wholeArray.length/2))
    var secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2))
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
    var merged = [];
    while (arr1.length && arr2.length){
        if (arr1[0] > arr2[0]){
            merged.push(arr2.shift())
        } else {
            merged.push(arr1.shift())
        }
    }
    merged = arr1.length ? merged.concat(arr1) : merged.concat(arr2)
    //console.log('merged log:', merged);
    return merged
}