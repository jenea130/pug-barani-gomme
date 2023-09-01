import streetMap from "./modules/streetMap";
import videoPlay from "./modules/video/videoPlay";

window.addEventListener("DOMContentLoaded", function () {

    const video = document.querySelector('.video');
	
	if (video) {
		videoPlay();
	}

	console.log("some thing for me");
	streetMap();
});
