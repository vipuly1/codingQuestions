const arr = [143,45,154,5,205,11,3]

const minMax=(arr)=>{    
    let [minpointer, maxPointer] = [0,0];
    for(let i =1; i<arr.length; i++){
        if(arr[minpointer] > arr[i]){
            minpointer = i
        }
        if(arr[maxPointer] < arr[i]){
            maxPointer = i
        }
    }
    return [arr[minpointer], arr[maxPointer]]
}

const elements = minMax(arr)
console.log(elements[0], elements[1])