function dqs(value) {
	return document.querySelector(value);
}



let headerNames = dqs(".header__center-names")



function BRinHeaderNames(value) {

	let txt = headerNames.innerHTML;
	let newTxt;

	if (value == "add" && txt.includes(" ")) {
		newTxt = txt.replace(/ /g, '<br>');
		headerNames.innerHTML = newTxt;
	} else if (value == "remove" && txt.includes("<br>")) {
		newTxt = txt.replace(/<br>/g, ' ');
		headerNames.textContent = newTxt;	
	}
}



window.addEventListener("DOMContentLoaded", event => {
	if (window.innerWidth <= 575.5) {
		BRinHeaderNames("add");
	}
});

window.addEventListener("resize", event => {
	window.innerWidth <= 575.5 ? BRinHeaderNames("add") : BRinHeaderNames("remove");
});