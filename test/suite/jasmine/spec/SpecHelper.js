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
