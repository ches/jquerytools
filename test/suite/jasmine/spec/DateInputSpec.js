describe("jQuery().dateinput", function() {
  var dateinput,
      originalInput;
  
  beforeEach(function(){
    originalInput = $("#date").clone();    
    dateinput = $("#date").dateinput({offset: [0, 0]});
  });
  
  afterEach(function(){
    $("#calroot").remove();
    $("#date").removeData('dateinput').replaceWith(originalInput);
  });
  
  describe("#show", function(){
    
    beforeEach(function(){
      $("#date").click();
    });
    
    it("should display the date window", function(){
      expect("#calroot").toBeVisible();
    });
    
    it("should position the date window properly", function(){
      var left = $("#date").offset().left,
          top = $("#date").offset().top + $("#date").outerHeight({margins:true});
          
      expect("#calroot").toBePositionedAt(left, top);
    });
  });
  
});