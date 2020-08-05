import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';


export function getAndRemoveHead(numItemsToRemove, array): any[] {
	return getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}


export function getAndRemoveTail(numItemsToRemove, array): any[] {
	return getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
