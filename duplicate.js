var findDuplicate = function(nums) {

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j])
                return nums[i]
        }
    }
    
};

console.log(findDuplicate([1,3,4,2,2]))