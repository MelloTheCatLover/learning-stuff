import assert from "node:assert/strict";


function findMaxAverage(nums: number[], k: number): number {
    let l = 0;
    let r = k;
    let sum = 0;

    for (let i = 0; i < k; i++) { sum += nums[i]; };

    if (nums.length === k) {
        return sum / k;
    };
    let max = sum;
// Потом условие почитал, там k <= n всегда, следовательно не будет
// случая когда окно больше массива и нам просто нужно среднее вывести.
    while (r < nums.length) {
        console.log(l, r, sum, nums.slice(l, r));
        sum = sum - nums[l] + nums[r];
        max = Math.max(sum, max);
        r++;
        l++;
    };
    return max / k;

};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);


assert.deepEqual(findMaxAverage([4025], 1), 4025.00000);
assert.deepEqual(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75);
assert.deepEqual(findMaxAverage([7520,-2203,1382,6754,1663], 4), 3363.25000);
assert.deepEqual(findMaxAverage([-28,-10,6,-4,24,1,-4,-1,-24,17,-1,14,-9,15,9,5,-17,-13,-2,6,15,10,-23,15,-15,-22,-30,4,-14,-3,-11,21,-27], 10), 3.2);
// assert.deepEqual(findMaxAverage(, ), );
// assert.deepEqual(findMaxAverage(, ), );
// assert.deepEqual(findMaxAverage(, ), );
// assert.deepEqual(findMaxAverage(, ), );
console.log("ok");
