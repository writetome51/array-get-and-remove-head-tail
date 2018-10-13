"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var errorIfArrayTooShortFor_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor");
function getAndRemoveTail(numItemsToRemove, array) {
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numItemsToRemove);
    errorIfArrayTooShortFor_1.errorIfArrayTooShortFor(numItemsToRemove, array);
    return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
exports.getAndRemoveTail = getAndRemoveTail;
