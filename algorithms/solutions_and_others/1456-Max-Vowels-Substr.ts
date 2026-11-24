import assert from "node:assert/strict";


function maxVowels(s: string, k: number): number {
    let l = 0;
    let r = k;
    let vowCount = 0;
    const vowel = "aeiou"; // при больших строках надо использовать Set
                           // по-хорошему, потому что includes и in
                           // полностью массив смотрят;

    for (let i = 0; i < k; i++) {
        // console.log(char);
        if (vowel.includes(s[i])) { vowCount++; };
    };

    if (k === s.length) { return vowCount; };

    let max = vowCount;
    while (r < s.length) {
        //console.log(l, r, s.slice(l, r), vowCount);
        if (vowel.includes(s[r])) { vowCount++; };
        if (vowel.includes(s[l])) { vowCount--; };
        max = Math.max(vowCount, max);
        r++;
        l++;
    }



    return max;
};

// maxVowels("abciiidef", 3);
