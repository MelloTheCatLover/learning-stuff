import assert from "node:assert/strict";

/*
 * 242. Valid Anagram — Easy
 * Тема: HashMap — подсчёт частот
 *
 * Условие: вернуть true, если t — анаграмма s (те же буквы
 * в том же количестве, порядок любой).
 *
 * Ограничения: длины до 5·10^4, только строчные английские буквы.
 *
 * Пример: s = "anagram", t = "nagaram"  →  true
 */

function isAnagram(s: string, t: string): boolean {
    // твоё решение
    return false;
}

// ─── тесты ───────────────────────────────────────────────
const tests: [string, string, boolean, string][] = [
    ["anagram", "nagaram", true, "пример из условия"],
    ["rat", "car", false, "разные буквы"],
    ["a", "ab", false, "разная длина"],
    ["", "", true, "пустые"],
    ["aacc", "ccac", false, "те же буквы, разное количество"],
    ["listen", "silent", true, "классика"],
    ["aa", "a", false, "лишняя буква"],
];
for (const [s, t, want, label] of tests) {
    assert.equal(isAnagram(s, t), want, label);
}
console.log("ok");












/* ─── подсказки: открывай по одной ────────────────────────
 *
 * 1. Что одинаково у двух анаграмм, если не смотреть на порядок букв?
 *
 * 2. Сортировка даёт O(n log n). Как за O(n)? Буквы только строчные —
 *    нужна ли тут Map?
 *
 * 3. Можно ли обойтись ОДНИМ массивом счётчиков на обе строки?
 *
 */
