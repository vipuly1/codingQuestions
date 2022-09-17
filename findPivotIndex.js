var pivotIndex = function (nums) {
    let leftSum = 0;
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum = totalSum + nums[i];
    }
    for (let j = 0; j < nums.length; j++) {
        if (leftSum === totalSum - (leftSum + nums[j])) {
            return j;
        } else {
            leftSum = leftSum + nums[j];
        }
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
