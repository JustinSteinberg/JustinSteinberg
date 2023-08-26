
$(window).ready(function(){
	$(window).trigger('resize');

	document.documentElement.style.setProperty('--vh', window.innerHeight*0.01 + 'px');

});

$(window).resize(function(){
	
	var targetWidth = 756;
	
	if ($(this).width() <= targetWidth){
		console.log("Do Nothing!");

		$(".connect").removeClass("hover2");
		$(".work").removeClass("hover1");
		$(".about").removeClass("hover4");
		$(".logo").removeClass("hover3");
		$(".community").removeClass("hover5");
	
		/*$(".logo").on('touchstart touchend', function(e) {

				$(".logo").toggleClass(".logo-hover");

		});

		$(".connect").on('touchstart touchend', function(e) {
			
				$(".connect").toggleClass(".connect_hover");

		});
		$(".about").on('touchstart touchend', function(e) {
			
				$(".about").toggleClass(".about_hover");

		});
		$(".work").on('touchstart touchend', function(e) {
			
				$(".work").toggleClass(".work_hover");

		});
		$(".community").on('touchstart touchend', function(e) {
			
				$(".community").toggleClass(".community_hover");

		});
*/
	}
	else {

		console.log("Do Something!");

		$(".connect").addClass("hover2");
		$(".work").addClass("hover1");
		$(".about").addClass("hover4");
		$(".logo").addClass("hover3");
		$(".community").addClass("hover5");

			//* Connect
		$(".hover2").hover(function(){
			
			var flexHover = "0.55 1 55%";
			$(this).stop(true,true).css("flex", flexHover);
			$(this).stop(true,true).css("height", "77vh");
			$(".work").stop(true,true).css("flex", "0.45 1 45%");
			$(".work").stop(true,true).css("height", "57vh");
			$(".about").stop(true,true).css("flex", "0.25 1 25%");
			$(".about").stop(true,true).css("height", "43vh");
			$(".about").stop(true,true).css("top", "-20vh");
			$(".logo").stop(true,true).css("flex", "0 1 20%")
			$(".logo").stop(true,true).css("margin-right","30vw");
			$(".logo").stop(true,true).css("height", "20vh");
			$(".logo").stop(true,true).css("top", "-20vh");		
			$(".community").stop(true,true).css("height", "23vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("flex", "0.75 1 75%");
			$(".logo").stop(true,true).css("height", "20vh");


		}, function(){

			var flexUnhover = "0.4 1 40%";
			$(this).stop(true,true).css("flex", flexUnhover);
			$(this).stop(true,true).css("height", "60vh");
			$(".work").stop(true,true).css("flex", "0.60 1 60%");
			$(".work").stop(true,true).css("height", "40vh");
			$(".about").stop(true,true).css("flex", "0.40 1 40%");
			$(".about").stop(true,true).css("height", "60vh");
			$(".community").stop(true,true).css("height", "40vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("flex", "0.60 1 60%");
			$(".logo").stop(true,true).css("margin-right","0vw");

		});
		//* Work

		$(".hover1").hover(function(){
			

			var flexHover = "0.75 1 75%";
			$(this).stop(true,true).css("flex", flexHover);
			$(this).stop(true,true).css("height", "55vh");
			$(".connect").stop(true,true).css("flex", "0.25 1 25%");
			$(".connect").stop(true,true).css("height", "75vh");
			$(".about").stop(true,true).css("flex", "0.55 1 55%");
			$(".about").stop(true,true).css("height", "45vh");
			$(".about").stop(true,true).css("top", "-20vh");
			$(".logo").stop(true,true).css("flex", "0 1 20%")
			$(".logo").stop(true,true).css("margin-left","30vw");
			$(".logo").stop(true,true).css("height", "20vh");
			$(".logo").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("height", "25vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("flex", ".45 1 45%");

		}, function(){
			
			var flexUnhover = "0.6 1 60%";
			$(this).stop(true,true).css("flex", flexUnhover);
			$(this).stop(true,true).css("height", "40vh");
			$(".connect").stop(true,true).css("flex", "0.40 1 40%");
			$(".connect").stop(true,true).css("height", "60vh");
			$(".about").stop(true,true).css("flex", "0.40 1 0");
			$(".about").stop(true,true).css("height", "60vh");
			$(".community").stop(true,true).css("height", "40vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("flex", "0.60 1 0");
			$(".logo").stop(true,true).css("margin-left","0vw");

		});

		//* Community ("Skills")

		$(".hover5").hover(function(){

			var flexHover = ".65 1 65%";
			$(this).stop(true,true).css("flex", flexHover);
			$(this).stop(true,true).css("height", "46vh");
			$(this).stop(true,true).css("top", "-20vh");
			$(".connect").stop(true,true).css("flex", ".45 1 45%");
			$(".connect").stop(true,true).css("height", "54vh");
			$(".connect").stop(true,true).css("position", "static");
			$(".about").stop(true,true).css("flex", ".35 1 35%");
			$(".about").stop(true,true).css("height", "66vh");
			$(".about").stop(true,true).css("top", "-20vh");
			$(".logo").stop(true,true).css("flex", "0 1 20%");
			$(".logo").stop(true,true).css("top", "-20vh");
			$(".work").stop(true,true).css("height", "34vh");
			$(".work").stop(true,true).css("flex", "0.55 1 55%");
			$(".logo").stop(true,true).css("margin-right","10vw");
			$(".logo").stop(true,true).css("height", "20vh");
			$(".about").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("top", "-20vh");

		}, function(){

			var flexUnhover = "0.60 1 60%";
			$(this).stop(true,true).css("flex", flexUnhover);
			$(this).stop(true,true).css("height", "40vh");
			$(".connect").stop(true,true).css("flex", "0.40 1 40%");
			$(".connect").stop(true,true).css("height", "60vh");
			$(".about").stop(true,true).css("flex", "0.40 1 40%");
			$(".about").stop(true,true).css("height", "60vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".logo").stop(true,true).css("top", "-20vh")
			$(".work").stop(true,true).css("flex", "0.60 1 60%");
			$(".work").stop(true,true).css("height", "40vh");
			$(".logo").stop(true,true).css("margin-right","0vw");

		});


		//* ABOUT
		$(".hover4").hover(function(){

			var flexHover = "0.55 1 55%";
			$(this).stop(true,true).css("flex", flexHover);
			$(this).stop(true,true).css("height", "77vh");
			$(".work").stop(true,true).css("flex", "0.75 1 75%");
			$(".work").stop(true,true).css("height", "23vh");
			$(".connect").stop(true,true).css("flex", "0.25 1 25%");
			$(".connect").stop(true,true).css("height", "43vh");
			$(".connect").stop(true,true).css("position", "static");
			$(".logo").stop(true,true).css("flex", "0 1 20%");
			$(".logo").stop(true,true).css("margin-left","30vw");
			$(".logo").stop(true,true).css("height", "20vh");
			$(".logo").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("height", "57vh");
			$(".community").stop(true,true).css("flex", "0.45 1 45%");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".about").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("top", "-20vh");

		}, function(){

			var flexUnhover = "0.4 1 0%";
			$(this).stop(true,true).css("flex", flexUnhover);
			$(this).stop(true,true).css("height", "60vh");
			$(".work").stop(true,true).css("flex", "0.60 1 60%");
			$(".work").stop(true,true).css("height", "40vh");
			$(".connect").stop(true,true).css("flex", "0.40 1 40%");
			$(".connect").stop(true,true).css("height", "60vh");
			$(".community").stop(true,true).css("height", "40vh");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".community").stop(true,true).css("flex", "0.60 1 0");
			$(".community").stop(true,true).css("top", "-20vh");
			$(".logo").stop(true,true).css("margin-left","0vw");

		});

		//* LOGO
		$(".hover3").hover(function(){
			/*$(".logo").css("visibility", "hidden");*/
			var flexHover = "0 0 40%";
			$(".logo").stop(true,true).css("flex", flexHover);
			$(".logo").stop(true,true).css("z-index", "99");
			$(".logo").stop(true,true).css("order", "1");
			$(".logo").stop(true,true).css("height", "40vh");
			$(this).stop(true,true).css("top","-40vh");
			$(".work").stop(true,true).css("flex", "0.0 1 70%");
			$(".work").stop(true,true).css("height", "30vh");
			$(".connect").stop(true,true).css("flex", "0.0 1 30%");
			$(".connect").stop(true,true).css("height", "70vh");
			$(".connect").stop(true,true).css("position", "relative");
			$(".about").stop(true,true).css("flex", "0 1 30%");
			$(".about").stop(true,true).css("height", "70vh");
			$(".about").stop(true,true).css("top", "-60vh");
			//*$(".about").css("top","0vh");
			$(".community").stop(true,true).css("flex", "0 1 70%");
			$(".community").stop(true,true).css("height", "30vh");
			$(".community").stop(true,true).css("top", "-60vh");

		
		}, function(){

		/*	var flexUnhover = "0.2 1 0%";	
			$(".hidden-box").css("display", "none");
			$(this).css("flex", flexUnhover)
			$(this).css("height", "20vh");
			$(this).css("top","-20vh");
			$(this).css("order", "0");
			$(this).css("z-index", "99");
			$(".work").css("flex", "0.60 1 60%");
			$(".work").css("height", "40vh");
			$(".connect").css("flex", "0.40 1 40%");
			$(".connect").css("height", "60vh");
			$(".connect").css("position", "static");
			$(".community").css("height", "40vh");
			$(".community").css("top", "-20vh");
			$(".community").css("flex", "0.60 1 60%");
			$(".about").css("flex", "0.40 1 40%");
			$(".about").css("height", "60vh");
	*/
		});

	}

});