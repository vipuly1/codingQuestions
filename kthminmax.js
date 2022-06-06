const arrays = [143, 45, 154, 5, 205, 11, 3]
const k = 3
const sortArr = (arr, k) => {
    let pointer;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j])
            if (arr[i] > arr[j]) {
                pointer = arr[i]
                arr[i] = arr[j]
                arr[j] = pointer

            }
        }
    }
    console.log(arr)
    let kthMinElement = arr[k-1]
    let kthMaxElement = arr[arr.length - k]

    return [kthMinElement,kthMaxElement]

}

const kthelement = sortArr(arrays, 3)
console.log(kthelement[0])
console.log(kthelement[1])