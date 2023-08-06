const cube = document.querySelector(".cube");
const scene = document.querySelector(".scene")
let mouseX = 0;
let mouseY = 0;
let prevRotateX = 0;
let prevRotateY = 0;
let rotateX = 0;
let rotateXY = 0;

const rotationValue = 300;

const handleMouseMove = (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
	rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
	rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleTouchMove = (event) => {
	document.documentElement.style.overflow = 'hidden';

	mouseX = event.touches[0].pageX;
	mouseY = event.touches[0].pageY;

	rotateX = (-((mouseY*1.25)/ window.innerHeight - 0.5) * rotationValue) + parseInt(cube.dataset.dataX);
	rotateY = (((mouseX*1.25)/ window.innerWidth - 0.5)  * rotationValue) + parseInt(cube.dataset.dataY);
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	cube.dataset.rotateX = rotateX;
	cube.dataset.rotateY = rotateY;
 
};

cube.addEventListener('touchstart', function(e) {

   document.documentElement.style.overflow = 'hidden';
   e.preventDefault();
  
});

scene.addEventListener('touchstart', function(e){
	document.documentElement.style.overflow = 'hidden';
});

cube.addEventListener('touchend', function(e) {
   document.documentElement.style.overflow = 'auto';
	cube.dataset.dataX = parseInt(cube.dataset.rotateX);
	cube.dataset.dataY = parseInt(cube.dataset.rotateY);

});

scene.addEventListener('touchend', function(e){
   document.documentElement.style.overflow = 'auto';
});

window.addEventListener("mousemove", handleMouseMove);
cube.addEventListener("touchmove", handleTouchMove);
//window.addEventListener("touchstart", handleTouchStart);

