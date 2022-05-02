const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".btn-close");
const submenu = document.querySelector(".submenu");

const hasSubmenu = document.querySelector(".hasSubmenu");

hamburger.addEventListener("click", () => {
    nav.style.right === "-70%";
    nav.style.right = "0";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    nav.style.right === "0";
    nav.style.right = "-70%";
    closeBtn.style.display = "none";
});

hasSubmenu.addEventListener("click", () => {
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display === "block";
    }
});
