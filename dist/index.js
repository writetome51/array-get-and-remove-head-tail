import {getAndRemoveAdjacentAt} from '@writetome51/array-get-and-remove-adjacent-at';


export function getAndRemoveHead(numItemsToRemove, array) {
	return getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}


export function getAndRemoveTail(numItemsToRemove, array) {
	return getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
