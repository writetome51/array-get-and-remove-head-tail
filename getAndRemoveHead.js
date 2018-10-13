"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("./getAndRemoveAdjacentAt");
function getAndRemoveHead(numItemsToRemove, array) {
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}
exports.getAndRemoveHead = getAndRemoveHead;
