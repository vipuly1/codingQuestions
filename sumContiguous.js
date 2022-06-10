const arr = [-2,-1,-3,-4,-1,-2,-1,-5,-4]

const largestSumCongiguousSubArray = (arr) =>{
    let currentArray = []
    let maxSumArray = []
    let currentSum = 0
    let maxSum = 0

    for(let i = 0; i< arr.length; i++){
        currentSum += arr[i]
        currentArray.push(arr[i])

        if(currentSum > maxSum){
            maxSum = currentSum
            maxSumArray = [...currentArray]
        }
        else if(currentSum < 0){
            currentSum = 0
            currentArray.splice(0, currentArray.length)
        }
    }
    return[maxSumArray,maxSum]

}

const result = largestSumCongiguousSubArray(arr)
console.log(result[1], result[0])

