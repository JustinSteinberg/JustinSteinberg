

$(document).ready(function(){
	//* Connect
	$(".connect").hover(function(logo){
		
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
		$(".hidden-logo").css("top", "67%")
		$(".hidden-logo").css("left", "35.2%")
		var pos = $(".logo").offset();
		var height = $(window).height();
		var width = $(window).width();
		console.log("Connect Hover:", (height - pos.top)/height, (width-pos.left)/width);

	}, function(){
		$(".hidden-logo").css("top", "50%")
		$(".hidden-logo").css("left", "50%")

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
		$(".hidden-logo").css("top", "65%")
		$(".hidden-logo").css("left", "65%")
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

		var pos = $(".logo").offset();
		var height = $(window).height();
		var width = $(window).width();
		console.log("WORK Hover:", (height - pos.top)/height, (width-pos.left)/width);

	}, function(){
		
		$(".hidden-logo").css("top", "50%")
		$(".hidden-logo").css("left", "50%")

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
	
		$(".hidden-logo").css("top", "44%")
		$(".hidden-logo").css("left", "45.2%")

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
					
		var pos = $(".logo").offset();

		var height = $(window).height();
		var width = $(window).width();
		console.log("COMMUNITY Hover:", (height - pos.top)/height, (width-pos.left)/width);	

	}, function(){
		
		$(".hidden-logo").css("top", "50%")
		$(".hidden-logo").css("left", "50%")

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
	
		$(".hidden-logo").css("top", "33%")
		$(".hidden-logo").css("left", "65.1%")

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

		var pos = $(".logo").offset();
		var height = $(window).height();
		var width = $(window).width();
		console.log("ABOUT Hover:", (height - pos.top)/height, (width-pos.left)/width);

	}, function(){
		
		$(".hidden-logo").css("top", "50%")
		$(".hidden-logo").css("left", "50%")

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

	//* LOGO
	$(".logo").hover(function(){
		$(".logo").css("visibility", "hidden");
		var flexHover = "0 1 40% ";
		$(".hidden-logo").css("visibility", "visible");
		$(".work").css("flex", "0.30 1 30%");
		$(".work").css("height", "70vh");
		$(".connect").css("flex", "0.70 1 70%");
		$(".connect").css("height", "30vh");
		$(".about").css("flex", "0 1 70%");
		$(".about").css("height", "30vh");
		$(".about").css("top","0vh");
		$(".community").css("flex", "0.3 0 0");
		$(".community").css("height", "70vh");
		$(".community").css("top", "-30vh");

	}, function(){
	/*	var flexUnhover = "0.2 1 0%";
		

		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".about").css("order", "inherit");
		$(".about").css("top", "-20vh");


	});

	$(".hidden-logo").hover(function(){
		$(".hidden-logo").css("width", "40%");
		$(".hidden-logo").css("height", "40%");
		$(".work").css("flex", "0.30 1 30%");
		$(".work").css("height", "70vh");
		$(".connect").css("flex", "0.70 1 70%");
		$(".connect").css("height", "30vh");
		$(".about").css("flex", "0 1 70%");
		$(".about").css("height", "30vh");
		$(".about").css("top","0vh");
		$(".community").css("flex", "0.3 0 0");
		$(".community").css("height", "70vh");
		$(".community").css("top", "-30vh");
	}, function(){
		var flexUnhover = "0.2 1 0%";
		$(".hidden-logo").css("width", "20%");
		$(".hidden-logo").css("height", "20%");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".about").css("order", "inherit");
		$(".about").css("top", "-20vh");

	});


});