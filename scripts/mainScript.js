$(document).ready(function(){
	$(".randColor").hover(function(){
		var color = 'rgb('+ Math.floor(Math.random()*256).toString() + ',' + Math.floor(Math.random()*256).toString() + ',' + Math.floor(Math.random()*256).toString()  + ')';
		console.log(color);
		$(this).css("color", color);
	}, function(){
		$(this).css("color", "black");
	});
});