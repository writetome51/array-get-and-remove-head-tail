import { getAndRemoveAdjacentAt } from './getAndRemoveAdjacentAt';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';


export function getAndRemoveTail(numItemsToRemove, array): any[] {
	errorIfNotIntegerZeroOrGreater(numItemsToRemove);
	return getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
