import assert from "node:assert/strict";

function maxSelectedElements(nums: number[]): number {
    const dp = new Map<number, number>();
    const get = (v: number) => dp.get(v) ?? 0;
    let result = 0;
    const sorted = Int32Array.from(nums).sort();
    // console.log(sorted);
    dp.set(0, 0);
    for (let i = 0; i < sorted.length; i++) {
        dp.set(sorted[i] + 1, get(sorted[i]) + 1);
        dp.set(sorted[i], get(sorted[i] - 1) + 1);
        // console.log(dp);
        if (get(sorted[i]) > result) { result = get(sorted[i]); }

        if (get(sorted[i] + 1) > result) { result = get(sorted[i]  + 1); }
    }



    return result;
}

maxSelectedElements([2, 1, 5, 1, 1]);

assert.equal(maxSelectedElements([2, 1, 5, 1, 1]), 3);
assert.equal(maxSelectedElements([1, 4, 7, 10]), 1);
assert.equal(maxSelectedElements([1, 1, 1]), 2);
assert.equal(maxSelectedElements([1, 2]), 2);
assert.equal(maxSelectedElements([1, 1, 2, 3]), 4);
assert.equal(maxSelectedElements([8, 10, 6, 12, 9, 12, 2, 3, 13, 19, 11, 18, 10, 16]), 8);
console.log("ok");
