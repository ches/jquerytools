$(function(){
  
  var wizard = $("#wizard").expose({color: '#789', lazy: true});

	// enable exposing on the wizard
	wizard.click(function() {
		$(this).expose().load();
	});
	
	$("ul.tabs", wizard).tabs("div.panes > div");
	
});