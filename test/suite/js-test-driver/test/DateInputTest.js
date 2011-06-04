TestCase("DateInputTest", {
  setUp: function(){
    /*:DOC dateinput = <input type="date" name="mydate" id="date" />*/
    $dateInput = $(dateinput).dateinput().click();
  },
  
  testShowCalRoot: function(){
    expectAsserts(1);
    assertTrue("Calroot is visible", $("#calroot").is(":visible"));
  }
});