const arr1 = [1, 3, 5, 7]
const arr2 = [0, 2, 6, 8, 9]




const mergeSortedArray = (arr1, arr2) => {
    arr1 = [...arr1, ...arr2]

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }
        }
    }
    return arr1
}

console.log(mergeSortedArray(arr1, arr2))