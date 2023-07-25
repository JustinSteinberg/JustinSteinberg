const menuBtn = document.querySelector("#menuToggle");
const navBar = document.querySelector("nav");
let menuOpen = false;

menuBtn.addEventListener('click', function() {
	if(!menuOpen){
		navBar.style.top = "7vh";
		menuOpen = true;
	}
	else{
		navBar.style.top = "-50vh";
		menuOpen = false;
	}
});