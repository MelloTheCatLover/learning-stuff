import assert from "node:assert/strict";

function gcd(a: number, b: number): number {
    if (a === 0) {
        console.log(a, b, b % a);
        return a;
    } else {
        console.log(a, b, b % a);
        return gcd(b, a % b);
    }
};


function f (nums: number[]): number {

    return 1;
};



console.log(gcd(5, 4));
// assert.deepEqual(f(1,2,1,2,1,1,1), 5);
console.log("ok");

// if prod >= 2520 * lcm * gcd then skip
