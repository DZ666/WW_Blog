menu.onclick = function myFunc() {
	var x = document.querySelector('#myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
