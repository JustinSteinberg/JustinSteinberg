$(document).ready(function(){
	$(".randColor").hover(function(){
		var color = 'rgb('+ Math.floor(Math.random()*256).toString() + ',' + Math.floor(Math.random()*256).toString() + ',' + Math.floor(Math.random()*256).toString()  + ')';
		console.log(color);
		$(this).css("color", color);
	}, function(){
		$(this).css("color", "black");
	});
});

$(document).ready(function() {
	$(".connect").hover(function(){
		$(".connect").css("grid-row", "1 / 8");
		$(".connect").css("grid-column", "5 / 12");
		$(".work").css("grid-row", "1 / 6");
		$(".work").css("grid-column", "1 / 5");
		$(".about").css("grid-row", "6 / 12");
		$(".about").css("grid-column", "1 / 3");
		$(".skills").css("grid-row", "8 / 12");
		$(".skills").css("grid-column", "3 / 12");
		$(".logo").css("grid-row", "6 / 8");
		$(".logo").css("grid-column", "3 / 5");
		console.log("Hovering connect");

	}, function(){
		$(".connect").css("grid-row", "1 / 7");
		$(".connect").css("grid-column", "7 / 11");
		$(".work").css("grid-row", "1 / 5");
		$(".work").css("grid-column", "1 / 7");
		$(".about").css("grid-row", "5 / 11");
		$(".about").css("grid-column", "1 / 5");
		$(".skills").css("grid-row", "7 / 11");
		$(".skills").css("grid-column", "5 / 11");
		$(".logo").css("grid-row", "5 / 7");
		$(".logo").css("grid-column", "5 / 7");
	});

});
/*
	$(".work").hover(function(){
		$(".content").css("grid-template-rows",
		console.log("I'm hovering")
	}, function(){
		$(".content").css("grid-template-areas",
	});

	$(".about").hover(function(){
		$(".content").css("grid-template-rows",
		console.log("I'm hovering")
	}, function(){
		$(".content").css("grid-template-areas",
	});

	$(".skills").hover(function(){
		$(".content").css("grid-template-rows",
		console.log("I'm hovering")
	}, function(){
		$(".content").css("grid-template-areas",
	});
});
*/