$(document).ready(function(){
	$(".connect").hover(function(){
		var flexHover = "0.55 1 55%";
		$(this).css("flex", flexHover);
		$(this).css("height", "75vh");
		$(".work").css("flex", "0.45 1 45%");
		$(".work").css("height", "55vh");
		$(".about").css("flex", "0.25 1 0");
		$(".about").css("height", "45vh");
		$(".logo").css("flex", "0.2 1 0")
		$(".community").css("height", "25vh");
		$(".community").css("top", "-5vh");
		$(".community").css("flex", "0.75 1 0");

	}, function(){
		var flexUnhover = "0.4 1 40%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "60vh");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");

	});
});