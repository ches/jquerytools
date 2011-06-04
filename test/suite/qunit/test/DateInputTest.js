/**
*   @file DateInputTest.js
*
*   Testing of jQuery Tools dateinput
*/

// jquery tools dateinput

var $dateInput,
    originalInput;
    
module("#show", {
  
  setup: function(){
    originalInput = $("#date").clone();
    $dateInput = $("#date").dateinput().click();
  },  
  teardown: function(){
    $("#calroot").remove();
    $dateInput.removeData('dateinput').replaceWith(originalInput);
  }
  
});

test("display the date window", function(){
  expect(1);
  ok($("#calroot").is(":visible"), "calroot is visible");
});

test("calroot is properly positioned", function(){
  expect(2);
  var left = $("#date").offset().left,
      top = $("#date").offset().top + $("#date").outerHeight({margins:true}),
      offset = $("#calroot").offset();
  
  equal(offset.left, left, "Left positioned properly");
  equal(offset.top, top, "Top positioned properly");
  
});

module("#setValue", {

  setup: function(){
    originalInput = $("#date").clone();
  },  
  teardown: function(){
    $("#calroot").remove();
    $dateInput.removeData('dateinput').replaceWith(originalInput);
  }

});

test("should set the proper date value for format yyyy-mm-dd", function(){
  expect(1);
  
  $dateInput = $("#date").dateinput({format:'yyyy-mm-dd'}).click();
  
  var today = new Date,
    month = zeropad(zeropad(today.getMonth()+1)),
    day = zeropad(1), // Choose the 1st of this month
    year = today.getFullYear();
    
  $("#calroot").find(".calweek a:not(.caloff)[text=1]").click();  // trigger the calendar click
  equal( $dateInput.val(), [year,month,day].join('-'), "Calendar date is equal" );
  
});