"use strict";

const mainImage = document.getElementById("mainImage");

function updateImage() {
	if (window.innerWidth >= 700) {
		mainImage.src = "assets/images/image-web-3-desktop.jpg";
	} else {
		mainImage.src = "assets/images/image-web-3-mobile.jpg";
	}
}

updateImage();

window.addEventListener("resize", updateImage);
