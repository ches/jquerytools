TestCase("DateInputTest#show", {
  setUp: function(){
    /*:DOC += <input type="date" name="mydate" id="date" />*/
    $dateInput = $("#date").dateinput().click();
  },
  
  testShowCalRoot: function(){
    expectAsserts(1);
    
    assertTrue("Calroot is visible", $("#calroot").is(":visible"));
  },
  
  testPositionCalRoot: function(){
    expectAsserts(2);
    var left = $("#date").offset().left,
        top = $("#date").offset().top + $("#date").outerHeight({margins:true}),
        offset = $("#calroot").offset();
    
    assertEquals("Left positioned properly", left, offset.left);
    assertEquals("Top positioned properly", top, offset.top);
  }
});

TestCase("DateInputTest#setValue", {
  setUp: function(){
    /*:DOC += <input type="date" name="mydate" id="date" />*/
    $dateInput = $("#date").dateinput({format:'yyyy-mm-dd'}).click();
  },
  
  'testDateFormat:yyyy-mm-dd': function(){
    var today = new Date,
      month = zeropad(today.getMonth()+1),  // getMonth() is from 0 - 11
      day = zeropad(1), // Choose the 1st of this month
      year = today.getFullYear();

    $("#calroot").find(".calweek a:not(.caloff)[text=1]").click();  // trigger the calendar click
    assertEquals( "Calendar date is equal", [year,month,day].join('-'), $dateInput.val() );
    
  }
});
