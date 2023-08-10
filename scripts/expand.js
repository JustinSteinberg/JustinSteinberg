const job2 = document.querySelector(".j2");
const close2 = document.querySelector(".closeJob");

const clickHandlerClose = (event) => {
	close2.style.visibility = "hidden";
	job2.classList.remove('expand');
	close2.removeEventListener("click", clickHandlerClose);
	job2.addEventListener("click", clickHandler, true);
	console.log("Clicking the close button");

};

const clickHandler = (event) =>{
	job2.classList.add('expand');
	close2.style.visibility = "visible";
	close2.addEventListener("click", clickHandlerClose);
	job2.removeEventListener("click", clickHandler);
	console.log("opening the div");
};


job2.addEventListener("click", clickHandler);
