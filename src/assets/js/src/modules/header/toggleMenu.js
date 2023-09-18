export default function toggleMenu() {
	const mainMenu = document.querySelector("#js-main-menu");
	const sandwichWrap = document.querySelector("#js-sandwich-wrap");
	const menu_links = document.querySelectorAll(".main-header__menu a");
	const pathname = window.location.pathname;

	menu_links.forEach(function (link) {
		const href = link.getAttribute("href");
		const link_pathname = href;
		if (link_pathname === pathname) {
			link.classList.add("active");
		}
	});

	sandwichWrap.addEventListener("mousedown", function (e) {
		e.preventDefault();

		if (mainMenu.classList.contains("fixed")) {
			mainMenu.classList.remove("fixed");
		} else {
			mainMenu.classList.add("fixed");
		}
		sandwichWrap.classList.toggle("sandwich--active");
	});
}
