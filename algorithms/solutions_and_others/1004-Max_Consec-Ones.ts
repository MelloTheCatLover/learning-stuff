import assert from "node:assert/strict";


function longestOnes(nums: number[], k: number):number {
    let l = 0;
    let zeros = 0;
    let ans = ;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            zeros++;
            if (zeros > k) {
                while (nums[l] !== 0) {
                    l++;
                    zeros--;
                };
            };
        };

        while (nums[l] === 1) {
            l++;
        };
    };
    return 6;
};

assert.deepEqual(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2), 6);
console.log("ok");
