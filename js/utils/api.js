import { addColorStarsOneArticle, changeCount} from "./service.js";

class Api {
    /**
     * Obtiens les pizzas.
     * @param {Number} limit Définit une limite de pizza reçue.
     * @param {Array} data Les données.
     * @param {String} container Le sélecteur ou afficher les produits.
     */
    getPizzas(limit, data, container) {
        // La limite pour la boucle.
        let maxPizzas = 0;

        if (limit == undefined || null) {
            maxPizzas = data.length;
        }
        
        if (limit !== data.length && limit > 0) {
            maxPizzas = limit;
        } 


        for (let i = 0; i < maxPizzas; i++) {
            this.createHtmlOfPizzas(data[i], container);
        }
    }

    /**
     * Obtiens une pizza par ID.
     * @param {Object} data 
     * @param {String} container 
     */
    getOnePizza(data, container) {
        const url = new URLSearchParams(window.location.search);

        data.forEach(element => {
            if (parseInt(url.get("pizza")) === element.id) {
                this.createHtmlOfPizzas(element, container);
            }
        });
    }

    /**
     * Crée le html d'une pizza.
     * @param {Object} data Les données.
     * @param {String} container Le sélecteur ou afficher les produits.
     */
    createHtmlOfPizzas(data, container) {
        const pizzaContainer = container;
        let pizza = document.createElement("div");

        // Crée une selecteur dynamique.
        const selector = container.classList[0] + "-produit";

        pizza.classList.add(selector);

        if (selector !== "produit-container-produit") {
            pizza.innerHTML = `
                <figure class="${selector}-img">
                    <img src="${data.img}" alt="${data.alt}">
                </figure>
                <div class="${selector}-information" >
                    <div>
                        <p class="${selector}-information-title">${data.name}</p>
                        <div class="${selector}-information-avis">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <p class="${selector}-information-prix">${data.price} euros</p>
                </div>
                
                <p class="${selector}-description">${data.description}</p>
                <a class="${selector}-button" href="http://127.0.0.1:5500/pages/produit.html?pizza=${data.id}">Détails</a>
            `

            pizzaContainer.appendChild(pizza);

        } else {
            let count = 1; 

            pizza.innerHTML = `
                <figure class="${selector}-img">
                    <img src="${data.img}" alt="">
                </figure>
                <div class="${selector}-information" >
                    <p class="${selector}-information-title">${data.name}</p>
                    <div class="${selector}-information-avis">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="${selector}-information-description">${data.description}</p>
                </div>
                    
                <div class="${selector}-panier">
                    <p class="${selector}-panier-prix">${data.price} euros</p>
                    <div class="${selector}-panier-count">  
                        <p class="${selector}-panier-count-remove">-</p>
                        <p class="${selector}-panier-count-number">${count}</p>
                        <p class="${selector}-panier-count-add">+</p>
                    </div>
                    <button class="${selector}-panier-button">Ajouter au panier</button>
                </div>
            `
            pizzaContainer.appendChild(pizza);
            addColorStarsOneArticle(`.${selector}-information-avis`, data);

            changeCount(data.price, count);
        }
    }
}
export default Api;