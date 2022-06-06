const arr = [143,45,154,5]

const reverseArray = (arr)=>{
    for(let i = 0; i<arr.length/2;i++){
        
        let temp = arr[arr.length - 1 - i]
        
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = temp
    }
    return arr
    
}
const reversedarray = reverseArray(arr)
console.log(reversedarray)