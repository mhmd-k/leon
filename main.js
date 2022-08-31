// navbar
const navBtn = document.querySelector(".icon");
const links = document.querySelector("#icon");
navBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!links.classList.contains("open")) {
    links.classList.add("open");
  } else {
    links.classList.remove("open");
  }
});
document.addEventListener("click", function () {
  links.classList.remove("open");
});

// scroll to top button
const btn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// elements apper on scroll
window.addEventListener("scroll", () => {
  apperingInScroll(
    document.querySelectorAll(".features .container .feat "),
    "visible",
    350
  );
  apperingInScroll(
    document.querySelectorAll(".container .father-icons .col"),
    "visible",
    350
  );
  apperingInScroll(
    document.querySelectorAll("h2.special-heading"),
    "onscroll",
    350
  );
  apperingInScroll(document.querySelectorAll(".col-2"), "visible", 350);
  apperingInScroll(document.querySelectorAll(".about-image"), "visible", 350);
  apperingInScroll(document.querySelectorAll(".about-text p"), "visible", 350);
  apperingInScroll(document.querySelectorAll(".mail"), "visible", 400);
  apperingInScroll(
    document.querySelectorAll("h2.special-heading:last-of-type"),
    "onscroll",
    400
  );
  if (screen.width < 767) {
    apperingInScroll(document.querySelectorAll(".mail"), "visible", 700);
    apperingInScroll(
      document.querySelectorAll("h2.special-heading:last-of-type"),
      "onscroll",
      600
    );
  }
});

function apperingInScroll(arr, c, num) {
  arr.forEach((ele) => {
    if (window.scrollY >= ele.offsetTop - num) ele.classList.add(c);
    else ele.classList.remove(c);
  });
}
