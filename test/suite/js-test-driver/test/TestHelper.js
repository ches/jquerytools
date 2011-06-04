/**
*   @file SpecHelper.js
*
*   Include all helper functions and matchers here
*/

function zeropad(val, len) {
	val = '' + val;
	len = len || 2;
	while (val.length < len) { val = "0" + val; }
	return val;
}