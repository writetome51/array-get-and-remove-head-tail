import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';
import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest } from 'error-if-array-too-short-to-meet-adjacent-items-request';
export function getAndRemoveHead(numItemsToRemove, array) {
    return getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}
export function getAndRemoveTail(numItemsToRemove, array) {
    errorIfNotIntegerZeroOrGreater(numItemsToRemove);
    errorIfArrayTooShortToMeetAdjacentItemsRequest(0, numItemsToRemove, array.length);
    return getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
