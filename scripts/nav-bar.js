const menuBtn = document.querySelector("#menuToggle");
const navBar = document.querySelector("nav");
let menuOpen = false;

menuBtn.addEventListener('click', function() {
	if(!menuOpen){
		navBar.style.top = "52px";
		menuOpen = true;
	}
	else{
		navBar.style.top = "-300px";
		menuOpen = false;
	}
});