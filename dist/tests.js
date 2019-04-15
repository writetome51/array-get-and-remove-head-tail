"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveHead_1 = require("./privy/getAndRemoveHead");
var arrays_match_1 = require("@writetome51/arrays-match");
var getAndRemoveTail_1 = require("./privy/getAndRemoveTail");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
var result = getAndRemoveHead_1.getAndRemoveHead(1, arr);
if (arrays_match_1.arraysMatch(result, [1]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
result = getAndRemoveTail_1.getAndRemoveTail(1, arr);
if (arrays_match_1.arraysMatch(result, [10]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
result = getAndRemoveHead_1.getAndRemoveHead(2, arr);
if (arrays_match_1.arraysMatch(result, [2, 3]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
result = getAndRemoveTail_1.getAndRemoveTail(2, arr);
if (arrays_match_1.arraysMatch(result, [8, 9]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
result = getAndRemoveHead_1.getAndRemoveHead(3, arr);
if (arrays_match_1.arraysMatch(result, [4, 5, 6]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = getAndRemoveTail_1.getAndRemoveTail(3, arr);
if (arrays_match_1.arraysMatch(result, [8, 9, 10]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: should trigger error if you request more items than array has:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var errorTriggered = false;
try {
    getAndRemoveHead_1.getAndRemoveHead(11, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: same thing as above, but for getAndRemoveTail():
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
errorTriggered = false;
try {
    getAndRemoveTail_1.getAndRemoveTail(11, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9: should not trigger error if you request total num items that array has,
// and that should actually empty the array:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
errorTriggered = false;
try {
    result = getAndRemoveHead_1.getAndRemoveHead(10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (!errorTriggered && arr.length === 0
    && arrays_match_1.arraysMatch(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10: same thing as above, but for getAndRemoveTail():
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
errorTriggered = false;
try {
    result = getAndRemoveTail_1.getAndRemoveTail(10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (!errorTriggered && arr.length === 0
    && arrays_match_1.arraysMatch(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11: should trigger error if you pass negative number to getAndRemoveHead():
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
errorTriggered = false;
try {
    result = getAndRemoveHead_1.getAndRemoveHead(-1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
