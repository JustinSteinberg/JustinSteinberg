const cube = document.querySelector(".cube");
let mouseX;
let mouseY;
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
	rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
	rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
	console.log("rotateX: ", rotateX);
	console.log("rotate: ", rotateY);
	cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);
cube.addEventListener("touchmove", handleTouchMove);
//window.addEventListener("touchstart", handleTouchStart);

