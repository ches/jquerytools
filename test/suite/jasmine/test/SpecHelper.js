/**
*   @file SpecHelper.js
*
*   Include all helper functions and matchers here
*/

beforeEach(function() {
  this.addMatchers({
    toBeVisible: function(){
      return $(this.actual).is(":visible");
    },
    toBePositionedAt: function(left, top){
      var $dateWindow = $(this.actual);
      return $dateWindow.offset().left == left && $dateWindow.offset().top == top;
    }
  });
});

function zeropad(val, len) {
	val = '' + val;
	len = len || 2;
	while (val.length < len) { val = "0" + val; }
	return val;
}