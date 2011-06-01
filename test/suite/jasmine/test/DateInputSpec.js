/**
*   @file DateInputSpec.js
*
*   Testing of jQuery Tools dateinput
*/
describe("jQuery().dateinput", function() {
  var $dateInput,
      $originalInput;
  
  beforeEach(function(){
    $originalInput = $("#date").clone();
  });
  
  afterEach(function(){
    $("#calroot").remove();
    $dateInput.removeData('dateinput').replaceWith($originalInput);
  });
  
  describe("#show", function(){
    
    beforeEach(function(){
      $dateInput = $("#date").dateinput().click();
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
  
  describe("#setValue", function(){
    
    describe("format 'yyyy-mm-dd'", function(){
      
      beforeEach(function(){
        $dateInput = $("#date").dateinput({format: 'yyyy-mm-dd'}).click();
      });

      it("should set the proper date value", function(){
        var today = new Date,
          month = zeropad(today.getUTCMonth()),
          day = zeropad(1), // Choose the 1st of this month
          year = today.getFullYear();
          
        $("#calroot").find(".calweek a:not(.caloff)[text=1]").click();  // trigger the calendar click
        expect( $dateInput.val() ).toBe([year,month,day].join('-'));
      });
    });
    
    describe("format 'mm/dd/yy", function(){
      // ...
    });
    
  });
  
});