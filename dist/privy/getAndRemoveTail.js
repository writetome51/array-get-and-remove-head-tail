"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
var error_if_not_integer_zero_or_greater_1 = require("error-if-not-integer-zero-or-greater");
var error_if_array_too_short_to_meet_adjacent_items_request_1 = require("error-if-array-too-short-to-meet-adjacent-items-request");
function getAndRemoveTail(numItemsToRemove, array) {
    error_if_not_integer_zero_or_greater_1.errorIfNotIntegerZeroOrGreater(numItemsToRemove);
    error_if_array_too_short_to_meet_adjacent_items_request_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(0, numItemsToRemove, array.length);
    return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
exports.getAndRemoveTail = getAndRemoveTail;
