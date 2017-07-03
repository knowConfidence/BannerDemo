$(document).ready(function(){

	$(".section_link").mouseenter(function(){

		$(this).find(".highlight").css("background-color", "red");

	});

	$(".section_link").mouseleave(function(){

		$(this).find(".highlight").css("background-color", "white");

	});

});