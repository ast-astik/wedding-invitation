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

function setVH() {
	let vh100 = window.innerHeight;
	let vh1 = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh100', `${vh100}px`);
	document.documentElement.style.setProperty('--vh1', `${vh1}px`);
};

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function getHeaderHeight() {
	if (window.innerWidth < 575.5) {
		burgerMenu('close');
		return 51;
	} else {
		return 99;
	}
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID) - getHeaderHeight();
    var distance = stopY > startY ? stopY - startY : startY - stopY;
 	if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}



window.addEventListener("DOMContentLoaded", event => {
	if (window.innerWidth <= 575.5) {
		BRinHeaderNames("add");
	}
});

window.addEventListener("resize", event => {
	setVH();
	window.innerWidth <= 575.5 ? BRinHeaderNames("add") : BRinHeaderNames("remove");
});



setVH();
