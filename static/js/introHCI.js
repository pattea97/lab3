'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Ask Your Own Heart");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbail").click(projectClick);
function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	$(".project").fadeOut();
	$(".project").fadeIn();
}
}