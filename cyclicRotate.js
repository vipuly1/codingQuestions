//Write a program to cyclically rotate an array by one.
const arr = [1, 3, 4, 5, 7]

const cyclicRotate = (arr) => {
    let lastElement = 7
    console.log(lastElement)
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(i, arr)
        if (i == 0){ 
            arr[i] = lastElement
        }
        else{
            arr[i] = arr[i - 1]

        }

        

    }
    return arr
}

console.log(cyclicRotate(arr))