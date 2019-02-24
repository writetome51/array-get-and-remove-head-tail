"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
function getAndRemoveHead(numItemsToRemove, array) {
    return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}
exports.getAndRemoveHead = getAndRemoveHead;
