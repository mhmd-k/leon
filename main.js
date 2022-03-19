// navbar
let headLinks = document.getElementById("links");
let headIcon = document.getElementById("icon");
headLinks.onclick = function () { 
    if (headIcon.style.display === "none") {
        headIcon.style.display = "block";
    } else { 
        headIcon.style.display = "none";
    }
}
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
