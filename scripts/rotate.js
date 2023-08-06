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
	prevRotateX = parseInt(cube.dataset.dataX);
	prevRotateY = parseInt(cube.dataset.dataY);
	console.log("End Rotation Pos X: ", prevRotateX);

   document.documentElement.style.overflow = 'hidden';
  
	cube.style.transform = `rotateX(${prevRotateX}deg) rotateY(${prevRotateY}deg)`;
});

cube.addEventListener('touchend', function(e) {
   document.documentElement.style.overflow = 'auto';
   /* let EndmouseX = e.changedTouches[0].pageX;
	let EndmouseY = e.changedTouches[0].pageY;
	console.log("ChangedTouchX: ", EndmouseX);
	console.log("ChangedTouchY: ", EndmouseY);
	prevRotateX = -(EndmouseY / window.innerHeight - 0.5) * rotationValue;
	prevRotateY = (EndmouseX/ window.innerWidth - 0.5)  * rotationValue;
	cube.dataset.dataX = prevRotateX;
	cube.dataset.dataY = prevRotateY;*/
	cube.dataset.dataX = parseInt(cube.dataset.rotateX);
	cube.dataset.dataY = parseInt(cube.dataset.rotateY);
});

window.addEventListener("mousemove", handleMouseMove);
cube.addEventListener("touchmove", handleTouchMove);
//window.addEventListener("touchstart", handleTouchStart);

