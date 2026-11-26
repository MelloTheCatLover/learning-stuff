import assert from "node:assert/strict";

/*
 * 217. Contains Duplicate — Easy
 * Тема: HashMap / Set — «видел ли я это раньше»
 *
 * Условие: вернуть true, если какое-то значение встречается в массиве
 * хотя бы дважды, иначе false.
 *
 * Ограничения: 1 <= nums.length <= 10^5.
 *
 * Пример: [1, 2, 3, 1]  →  true
 */

function containsDuplicate(nums: number[]): boolean {
    // твоё решение
    return false;
}

// ─── тесты ───────────────────────────────────────────────
const tests: [number[], boolean, string][] = [
    [[1, 2, 3, 1], true, "повтор на краях"],
    [[1, 2, 3, 4], false, "все разные"],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true, "много повторов"],
    [[1], false, "один элемент"],
    [[-1, -1], true, "отрицательные"],
    [[0, 4, 5, 0, 3, 6], true, "нули"],
];
for (const [a, want, label] of tests) {
    assert.equal(containsDuplicate(a), want, label);
}
console.log("ok");












/* ─── подсказки: открывай по одной ────────────────────────
 *
 * 1. Есть три решения: O(n²), O(n log n) и O(n). Какие?
 *
 * 2. Для O(n): какая структура отвечает на «было ли уже такое число» за
 *    O(1)?
 *
 */
