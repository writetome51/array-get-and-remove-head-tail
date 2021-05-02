# getAndRemoveHead\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItems,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): T[]

Removes and returns `numItems` from beginning of `array`.

# getAndRemoveTail\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItems,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): T[]

Removes and returns `numItems` from end of `array`.


## Examples
```
let arr = ['jim', 'todd', 'tony', 'barry', 'jill'];
let firstTwo = getAndRemoveHead(2, arr);

// firstTwo is ['jim', 'todd'] .
// arr is now ['tony', 'barry', 'jill'] .


let arr = ['jim', 'todd', 'tony', 'barry', 'jill'];
let lastThree = getAndRemoveTail(3, arr);

// lastThree is [ 'tony', 'barry', 'jill'] .
// arr is now ['jim', 'todd'] .
```


## Installation
`npm i @writetome51/array-get-and-remove-head-tail`

## Loading
```js
import {getAndRemoveHead, getAndRemoveTail} 
    from '@writetome51/array-get-and-remove-head-tail';
```

