$(document).ready(function(){
	//* Connect
	$(".connect").hover(function(){
		var flexHover = "0.55 1 55%";
		$(this).css("flex", flexHover);
		$(this).css("height", "77vh");
		$(".work").css("flex", "0.45 1 45%");
		$(".work").css("height", "57vh");
		$(".about").css("flex", "0.25 1 0");
		$(".about").css("height", "43vh");
		$(".logo").css("flex", "0.2 1 0")
		$(".community").css("height", "23vh");
		$(".community").css("top", "-3vh");
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
	//* Work

	$(".work").hover(function(){
		var flexHover = "0.75 1 75%";
		$(this).css("flex", flexHover);
		$(this).css("height", "55vh");
		$(".connect").css("flex", "0.25 1 25%");
		$(".connect").css("height", "75vh");
		$(".about").css("flex", "0.55 1 0");
		$(".about").css("height", "45vh");
		$(".logo").css("flex", "0.2 1 0")
		$(".community").css("height", "25vh");
		$(".community").css("top", "-5vh");
		$(".community").css("flex", ".45 1 0");

	}, function(){
		var flexUnhover = "0.6 1 60%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");

	});

	//* Community

	$(".community").hover(function(){
		var flexHover = "0.65 1 0";
		$(this).css("flex", flexHover);
		$(this).css("height", "46vh");
		$(this).css("top", "-26vh");
		$(".connect").css("flex", "0.45 45%");
		$(".connect").css("height", "54vh");
		$(".about").css("flex", "0.35 1 0");
		$(".about").css("height", "66vh");
		$(".logo").css("flex", "0.2 1 0")
		$(".work").css("height", "34vh");
		$(".work").css("flex", "0.55 1 55%")
	}, function(){
		var flexUnhover = "0.60 1 0";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".community").css("top", "-20vh");
		$(".logo").css("top", "-20vh")
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");

	});


	//* ABOUT
	$(".about").hover(function(){
		var flexHover = "0.55 1 0%";
		$(this).css("flex", flexHover);
		$(this).css("height", "77vh");
		$(".work").css("flex", "0.75 1 75%");
		$(".work").css("height", "23vh");
		$(".connect").css("flex", "0.25 1 25%");
		$(".connect").css("height", "43vh");
		$(".logo").css("flex", "0.2 1 0")
		$(".community").css("height", "57vh");
		$(".community").css("top", "-37vh");
		$(".community").css("flex", "0.45 1 0");

	}, function(){
		var flexUnhover = "0.4 1 0%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "60vh");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");

	});
});