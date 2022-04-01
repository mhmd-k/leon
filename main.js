// navbar
let navBtn = document.querySelector(".icon");
let links = document.querySelector("#icon");
navBtn.onclick = function (e) {
    e.stopPropagation();
    if (!links.classList.contains("open")) {
        links.classList.add("open");
    } else {
        links.classList.remove("open");
    }
};
document.onclick = function () {
    links.classList.remove("open");
};
links.onclick = function (e) {
    e.stopPropagation();
};
// scroll to top button
let btn = document.querySelector(".scroll-to-top");
window.onscroll = function () {
    if (window.scrollY >= 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
