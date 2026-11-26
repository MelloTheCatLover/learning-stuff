import assert from "node:assert/strict";
import { ListNode, fromArray, toArray } from "./utils/list";

/*
 * 83. Remove Duplicates from Sorted List — Easy
 * Тема: Linked List — перепривязка ссылок
 *
 * Условие: список отсортирован. Удалить повторы так, чтобы каждое
 * значение встречалось один раз. Вернуть голову.
 *
 * Ограничения: узлов от 0 до 300.
 *
 * Пример: 1 → 1 → 2 → 3 → 3  →  1 → 2 → 3
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    // твоё решение
    return head;
}

// ─── тесты ───────────────────────────────────────────────
const tests: [number[], number[], string][] = [
    [[1, 1, 2], [1, 2], "повтор в начале"],
    [[1, 1, 2, 3, 3], [1, 2, 3], "повторы в начале и конце"],
    [[], [], "пустой"],
    [[1, 1, 1], [1], "три одинаковых подряд"],
    [[1, 2, 3], [1, 2, 3], "повторов нет"],
    [[0, 0, 0, 1, 1, 2, 2, 2], [0, 1, 2], "много серий"],
];
for (const [a, want, label] of tests) {
    assert.deepEqual(toArray(deleteDuplicates(fromArray(a))), want, label);
}
console.log("ok");












/* ─── подсказки: открывай по одной ────────────────────────
 *
 * 1. Список отсортирован — где находятся одинаковые значения относительно
 *    друг друга?
 *
 * 2. Ты удалил cur.next. Нужно ли сразу сдвигать cur? Проверь на [1, 1,
 *    1].
 *
 */
