import streetMap from "./modules/streetMap";
import videoPlay from "./modules/video/videoPlay";
import toggleMenu from "./modules/header/toggleMenu";

window.addEventListener("DOMContentLoaded", function () {

    const video = document.querySelector('.video');
	
	if (video) {
		videoPlay();
	}

	console.log("some thing for me");
	streetMap();
	toggleMenu();
});
