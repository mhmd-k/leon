let headLinks = document.getElementById("links");
let headIcon = document.getElementById("icon");
headLinks.onclick = function () { 
    if (headIcon.style.display === "none") {
        headIcon.style.display = "block";
    } else { 
        headIcon.style.display = "none";
    }
}