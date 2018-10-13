"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt");
function getAndRemoveHead(numItemsToRemove, array) {
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}
exports.getAndRemoveHead = getAndRemoveHead;
