"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("./getAndRemoveAdjacentAt");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
function getAndRemoveTail(numItemsToRemove, array) {
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numItemsToRemove);
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
exports.getAndRemoveTail = getAndRemoveTail;
