import { getAndRemoveAdjacentAt } from './getAndRemoveAdjacentAt';


export function getAndRemoveHead(numItemsToRemove, array): any[] {
	return getAndRemoveAdjacentAt(0, numItemsToRemove, array);
}
