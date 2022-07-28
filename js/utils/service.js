/**
 * Rajoute la note d'un article.
 * @param {String} container Le sélécteur du produit.
 * @param {Object} data Les données de l'article choisi.
 */
export function addColorStarsOneArticle(container, data) {
    const allStars = document.querySelector(container);

    for (let i = 0; i < data.ranking; i++) {
        allStars.children[i].style.color = "#114d4d";
    }    
}

/**
 * Rajoute les notes aux articles.
 * @param {Array} container 
 * @param {Array} data 
 * @param {Number} limit 
 */
export function addColorStarsAllArticle(container, data, limit) {
    const allStars = document.querySelectorAll(container);

    if (limit === 0 || limit === undefined) {
        limit = data.length;
    }

    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < data[i].ranking; j++) {
            allStars[i].children[j].style.color = "#114d4d";
        }
    }
}

/**
 * Permets de rajoute un nombre de pizza
 * @param {Number} price 
 * @param {Number} count 
 */
export function changeCount(price, count) {
        console.log(typeof(price));
        console.log(typeof(count));

        const removeCount = document.querySelector(".produit-container-produit-panier-count-remove");
        const addCount = document.querySelector('.produit-container-produit-panier-count-add');
        const countView = document.querySelector(".produit-container-produit-panier-count-number");
        const priceView = document.querySelector(".produit-container-produit-panier-prix");

        removeCount.addEventListener("click", () => {
            if (count > 1) {
                count--;
                countView.innerText = count;
                priceView.innerText = `${totalPrice(price, count)} euros`;
            }
        })
        
        addCount.addEventListener("click", () => {
            count++;
            countView.innerText = count;
            priceView.innerText = `${totalPrice(price, count)} euros`;
        })
}

/**
 * Calcul le prix total.
 * @param {Number} price 
 * @param {Number} count 
 * @returns 
 */
export function totalPrice(price, count) {
    return price * count;
}

/**
 * Un widget qui affiche les heures, minutes, secondes actuel.
 */
export function clock() {    
    const clockView = document.querySelector("#clock");

    setInterval(() => {
        const date = new Date();
        let minutes = date.getMinutes();
        let heures = date.getHours();

        if (heures < 10) {
            heures = `0${heures}`;
        } else {
            heures = heures;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        } else {
            minutes = minutes;
        }

        clockView.textContent = `${heures}H${minutes}`
    }, 1000);
}