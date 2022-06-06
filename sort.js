// In-built sorting method
const arr = [143, 45, 154, 5, 205, 11, 3]

function customsort(val1, val2){
    if(val1<val2){
        return -1
    }
    else if(val1>val2){
        return 1
    }
    else return 0
}

const sortedArrays = arr.sort(customsort)
console.log(sortedArrays)


//Simple sorting technique

const sortArr = (arr, k) => {
    let pointer;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                pointer = arr[i]
                arr[i] = arr[j]
                arr[j] = pointer
            }
        }
    }
    return arr

}
const sortedArray = sortArr(arr)
console.log(sortedArray)
