// import assert from "node:assert/strict";

function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const testSum = numbers[l]! + numbers[r]!;
        if (testSum < target) {
            l += 1;
        } else if (testSum > target) {
            r -= 1;
        } else {
            return [l + 1, r + 1];
        }
    }

    return [-1, -1];
}

// assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
// assert.deepEqual(twoSum([2, 3, 4], 6), [1, 3]);
// assert.deepEqual(twoSum([-1, 0], -1), [1, 2]);
// assert.deepEqual(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8), [4, 5]);
// assert.deepEqual(twoSum([-3, -1, 0, 2, 5], 4), [2, 5]);
console.log("super ok");

function selfABS(num: number) {
    if (num < 0){
        return -num;
    } else {
        return num;
    }
}


function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    console.log("RESULT: ", result)

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        let sum = nums[i] + nums[l] + nums[r];
        //console.log("nums[i]: ", nums[i], " || nums[l]: ", nums[l],  " || nums[r]: ", nums[r]);
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            //console.log("LEFT:  ", nums[l],  " || RIGHT: ", nums[r]);
            //console.log("SUM: ", sum);

            if (sum == target) {
                return target;
            } else if (sum < target){
                l += 1;
            } else {
                r -= 1;
            }
            if (selfABS(target - sum) < selfABS(target - result)) {
                //console.log("RESULT: ", result)
                result = sum;
            }
        }


    }

    return result;


};



f (num < 0){
        return -num;
    } else {
        return num;
    }
}


function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    console.log("RESULT: ", result)

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        let sum = nums[i] + nums[l] + nums[r];
        //console.log("nums[i]: ", nums[i], " || nums[l]: ", nums[l],  " || nums[r]: ", nums[r]);
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            //console.log("LEFT:  ", nums[l],  " || RIGHT: ", nums[r]);
            //console.log("SUM: ", sum);

            if (sum == target) {
                return target;
            } else if (sum < target){
                l += 1;
            } else {
                r -= 1;
            }
            if (selfABS(target - sum) < selfABS(target - result)) {
                //console.log("RESULT: ", result)
                result = sum;
            }
        }


    }

    return result;


};



unction selfABS(num: number) {
    if (num < 0){
        return -num;
    } else {
        return num;
    }
}


function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    console.log("RESULT: ", result)

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        let sum = nums[i] + nums[l] + nums[r];
        //console.log("nums[i]: ", nums[i], " || nums[l]: ", nums[l],  " || nums[r]: ", nums[r]);
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            //console.log("LEFT:  ", nums[l],  " || RIGHT: ", nums[r]);
            //console.log("SUM: ", sum);

            if (sum == target) {
                return target;
            } else if (sum < target){
                l += 1;
            } else {
                r -= 1;
            }
            if (selfABS(target - sum) < selfABS(target - result)) {
                //console.log("RESULT: ", result)
                result = sum;
            }
        }


    }

    return result;


};




