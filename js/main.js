// == Import == //
import Api from "./utils/api.js";
import pizzas from "./utils/fakeDb.js";
import Carousel from "./utils/carousel.js";
import Form from "./utils/form.js";
import { addColorStarsAllArticle, clock } from "./utils/service.js";
import faq from "./utils/faq.js";
const carousel = new Carousel;
const api = new Api;
const form = new Form;

// Affiche la location de la page actuelle.
let location = window.location.pathname;

if (location === "/") {
    location = "/index.html";
}

// Génére le widget dans le header
clock();

// Génére du code en fonction de la page. // 
switch (location) {
    case "/index.html":
        // Lance le carousel en automatique.
        carousel.auto();
        // Obtiens 4 produits de l'api.
        api.getPizzas(4, pizzas, document.querySelector(".accueil-produits-container"));
        addColorStarsAllArticle(".accueil-produits-container-produit-information-avis", pizzas, 4);
        faq();
        break;
    case "/pages/produits.html":
        // Obtiens tout les produits de l'api.
        api.getPizzas(null, pizzas, document.querySelector(".produits-container"));
        addColorStarsAllArticle(".produits-container-produit-information-avis", pizzas);
        break;
    case "/pages/produit.html":
        api.getOnePizza(pizzas, document.querySelector(".produit-container"));
        break;
    case "/pages/contact.html":
        form.check();
        break;
}



// === HEADER === //
const menuBtn = document.querySelector(".header-mobilenav");
const closeMenu = document.querySelector(".close-mobilenav");

/**
 * Affiche ou cache le menu sous formats tablet et mobile.
 */
function menuChange() {
    const menu = document.querySelector('.header-menu');
    
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.style.display = "none";
        closeMenu.style.display = "flex";
    } else {
        closeMenu.style.display = "none";
        menuBtn.style.display = "flex";
    }
}

// == Event Listener == //
menuBtn.addEventListener("click", () => menuChange());
closeMenu.addEventListener("click", () => menuChange());

// ============ //

