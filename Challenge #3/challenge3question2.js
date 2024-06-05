var merge = function(nums1, m, nums2, n) {
    
    let nums1sliced = nums1.slice(0, m);
    let nums2sliced = nums2.slice(0, n);

    let bigUnsortedArray = nums1sliced.concat(nums2sliced);

    let bigSortedArray = sortArray(bigUnsortedArray);
        for (let i = 0; i < bigSortedArray.length; i++) {
        nums1[i] = bigSortedArray[i];
    }
    return nums1;

};

var sortArray = function(nums) {
    
    const recursiveSort = (arr, start) => {
        
        if (start >= arr.length - 1) {
            return arr;
        }
        
       
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
              
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        

        return recursiveSort(arr, start + 1);
    };
    
    return recursiveSort(nums, 0);
};