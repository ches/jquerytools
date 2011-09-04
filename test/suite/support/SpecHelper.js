beforeEach(function() {
  this.addMatchers({
    toBePositionedAt: function(left, top) {
      var $dateWindow = $(this.actual);
      return $dateWindow.offset().left == left && $dateWindow.offset().top == top;
    }
  });
});

