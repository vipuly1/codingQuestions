var runningSum = function(nums) {
    const result =[]
    nums.reduce((acc, current)=>{
        
        console.log(acc, current)
        sum = acc + current
        result.push(sum)
        return sum
    },0)
   
    return result 

};
console.log(runningSum([1,2,3,4]))