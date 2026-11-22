// import assert from "node:assert/strict";


function selfAbs(a:number):number {
    if (a < 0) {
        return -a;
    } else {
        return a;
    }
}


function threeSumClosest(nums: number[], target: number): number {
    // console.log(nums);
    nums.sort((a, b) => (a - b));
    // console.log(nums);
    let bestRes = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i += 1) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {

            if (selfAbs(target - bestRes) > selfAbs(target - (nums[i] + nums[l] + nums[r]))) {
                bestRes = nums[i] + nums[l] + nums[r];
             }

            if (target == nums[i] + nums[l] + nums[r]) {
                return target;
            } else if (target < nums[i] + nums[l] + nums[r]) {
                r -= 1;
            } else {
                l += 1;
            }
        }
        // console.log("RESULT before", bestRes);
        // console.log("RESULT", bestRes);

    }

    return bestRes;
}

console.log(threeSumClosest([1, 0, -12, 1000, 6, 3], -4));
// assert.deepEqual([0], [0]);
