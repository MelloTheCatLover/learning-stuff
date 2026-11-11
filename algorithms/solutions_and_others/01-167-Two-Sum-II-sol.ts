import assert from "node:assert/strict";

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

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
assert.deepEqual(twoSum([2, 3, 4], 6), [1, 3]);
assert.deepEqual(twoSum([-1, 0], -1), [1, 2]);
assert.deepEqual(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8), [4, 5]);
assert.deepEqual(twoSum([-3, -1, 0, 2, 5], 4), [2, 5]);
console.log("super ok");
