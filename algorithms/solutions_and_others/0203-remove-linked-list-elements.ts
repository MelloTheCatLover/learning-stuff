import assert from "node:assert/strict";
import { ListNode, fromArray, toArray } from "./utils/list";

/*
 * 203. Remove Linked List Elements — Easy
 * Тема: Linked List — dummy
 *
 * Условие: удалить из списка все узлы со значением val. Вернуть голову.
 *
 * Ограничения: узлов от 0 до 10^4.
 *
 * Пример: 1 → 2 → 6 → 3 → 4 → 5 → 6, val = 6  →  1 → 2 → 3 → 4 → 5
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // твоё решение
    return head;
}

// ─── тесты ───────────────────────────────────────────────
const tests: [number[], number, number[], string][] = [
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5], "пример из условия"],
    [[], 1, [], "пустой"],
    [[7, 7, 7, 7], 7, [], "удалить всё"],
    [[7, 1, 7], 7, [1], "голова и хвост"],
    [[1, 2, 3], 4, [1, 2, 3], "нечего удалять"],
    [[1, 1, 2, 1], 1, [2], "голова удаляется несколько раз подряд"],
];
for (const [a, val, want, label] of tests) {
    assert.deepEqual(toArray(removeElements(fromArray(a), val)), want, label);
}
console.log("ok");












/* ─── подсказки: открывай по одной ────────────────────────
 *
 * 1. Тест [7, 7, 7, 7]: голова удаляется, потом новая голова тоже. Как не
 *    писать для этого отдельный цикл?
 *
 * 2. Чтобы удалить узел, на каком узле нужно стоять — на нём или перед
 *    ним?
 *
 */
