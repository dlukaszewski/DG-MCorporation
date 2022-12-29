const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allNavLinks = document.querySelectorAll(".nav__link-mobile");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
    deleteAnimation();
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const deleteAnimation = () => {
    allNavLinks.forEach(item => {
        item.addEventListener("click", () => {
            navBtn.classList.remove("is-active");
			navMobile.classList.remove("nav-mobile--active");
        })
    })
}
navBtn.addEventListener("click", handleNav);