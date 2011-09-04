beforeEach(function() {
  this.addMatchers({
    toBePositionedAt: function(top, left) {
      var $element = $(this.actual);
      return $element.offset().left == left && $element.offset().top == top;
    }
  });
});

