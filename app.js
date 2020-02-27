const menu = document.querySelector("#menu");
const menuClose = document.querySelector(".menu-close");
const productClose = document.querySelector(".product-img");
const productHover = document.querySelector(".product-hover");


menuClose.addEventListener("click", () => {
    menuClose.classList.toggle("open");
    menu.classList.toggle("open");
});

productClose.addEventListener("click", () => {
    productClose.classList.toggle("none");
    productHover.classList.toggle("open");
});






