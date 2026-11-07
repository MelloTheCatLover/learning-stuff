import assert from "node:assert/strict";


function dedupe(nums: number[]): number[] {
    const result = new Set<number>();
    for (const x of nums) {
        if (!result.has(x)) {
            result.add(x);
        }
    }
    return Array.from(result);
}


assert.deepEqual(dedupe([1, 2, 2, 3, 1]), [1, 2, 3]);
assert.deepEqual(dedupe([]), []);
assert.deepEqual(dedupe([5, 5, 5]), [5]);
assert.deepEqual(dedupe([3, 1, 2]), [3, 1, 2]);
console.log("ok");
