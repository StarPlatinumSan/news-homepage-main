"use strict";

const mainImage = document.getElementById("mainImage");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("closeButton");
const opacityBody = document.getElementById("opacityBody");
const sideBar = document.getElementById("sideBarMenu");

function updateImage() {
	if (window.innerWidth >= 700) {
		mainImage.src = "assets/images/image-web-3-desktop.jpg";
	} else {
		mainImage.src = "assets/images/image-web-3-mobile.jpg";
	}
}

function sideBarMenu() {
	sideBar.style.transform = "translateX(0)";
	opacityBody.style.opacity = "0.7";
	sideBar.style.zIndex = "2";
	opacityBody.style.zIndex = "1";

	opacityBody.addEventListener("click", sideBarClose);
}

function sideBarClose() {
	sideBar.style.transform = "translateX(100%)";
	opacityBody.style.opacity = "0";

	sideBar.style.zIndex = "0";
	opacityBody.style.zIndex = "-1";

	opacityBody.removeEventListener("click", sideBarClose);
}

updateImage();

menu.addEventListener("click", sideBarMenu);
closeMenu.addEventListener("click", sideBarClose);
window.addEventListener("resize", updateImage);
