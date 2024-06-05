var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] < nums[i]) {

            let temp = nums[i];

            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
    }
    return nums;
};