import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfArrayTooShortFor }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor';


export function getAndRemoveTail(numItemsToRemove, array): any[] {
	errorIfNotIntegerZeroOrGreater(numItemsToRemove);
	errorIfArrayTooShortFor(numItemsToRemove, array);
	return getAndRemoveAdjacentAt(-numItemsToRemove, numItemsToRemove, array);
}
