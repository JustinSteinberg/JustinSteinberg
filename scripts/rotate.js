const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
let prevRotateX = 0;
let prevRotateY = 0;
let rotateX = 0;
let rotateXY = 0;

const rotationValue = 270;

const handleMouseMove = (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
	console.log("MouseX: ", mouseX);
	console.log("MouseY: ", mouseY);
	rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
	rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
	console.log("rotateX: ", rotateX);
	console.log("rotate: ", rotateY);
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleTouchMove = (event) => {
	document.documentElement.style.overflow = 'hidden';

	mouseX = event.touches[0].pageX;
	mouseY = event.touches[0].pageY;
	console.log("TouchX: ", mouseX);
	console.log("TouchY: ", mouseY);

	rotateX = (-(mouseY / window.innerHeight - 0.5) * rotationValue) + parseInt(cube.dataset.dataX);
	rotateY = ((mouseX/ window.innerWidth - 0.5)  * rotationValue) + parseInt(cube.dataset.dataY);
	console.log("rotateX: ", rotateX);
	console.log("rotateY: ", rotateY);
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	cube.dataset.rotateX = rotateX;
	cube.dataset.rotateY = rotateY;
 
};

cube.addEventListener('touchstart', function(e) {

   document.documentElement.style.overflow = 'hidden';
  
});

cube.addEventListener('touchend', function(e) {
   document.documentElement.style.overflow = 'auto';
	cube.dataset.dataX = parseInt(cube.dataset.rotateX);
	cube.dataset.dataY = parseInt(cube.dataset.rotateY);

});

window.addEventListener("mousemove", handleMouseMove);
cube.addEventListener("touchmove", handleTouchMove);
//window.addEventListener("touchstart", handleTouchStart);

