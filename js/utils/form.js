export default class Form {
    check() {
        // Element DOM //
        const form = document.querySelector(".contact-container-form");

        // Element a vérifié. //
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const objet = document.querySelector("#objet");
        const message = document.querySelector("#message");
        const condition = document.querySelector("#condition");

        // Button DOM. //
        const formBtn = document.querySelector(".contact-container-form-button");

        // Tableau de vérification. //
        let checkArray = [false, false, false, false, false];
        const color = ["#114d4d", "#C21632"];

        // Message DOM. //
        let nameMessage = document.querySelector("#name-message");
        let emailMessage = document.querySelector("#email-message");
        let objetMessage = document.querySelector("#objet-message");
        let messageMessage = document.querySelector("#message-message");

        // Event Listener //

        // Nom et Prénom
        name.addEventListener("change", () => {
            if (name.value.match(/[a-zA-Z]{1,}\s[a-zA-Z]{1,}/)) {
                this.generateMessage(nameMessage, "Valide.", color[0]);
                checkArray[0] = true;
            } else {
                this.generateMessage(nameMessage, "Le nom ou le prénom est invalide.", color[1]);
                checkArray[0] = false;
            }
        })

        // Email
        email.addEventListener("change", () => {
            if (email.value.match(/([^a-zA-Z]|[^0-9])+([a-zA-Z]|[0-9]{1,})+[@]+([a-z]{1})+[.]+[a-z]{1,}/)) {
                this.generateMessage(emailMessage, "Valide.", color[0]);
                checkArray[1] = true;
            } else {
                this.generateMessage(emailMessage, "Email est invalide.", color[1]);
                checkArray[1] = false;
            }
        })

        // Objet
        objet.addEventListener("change", () => {
            if (objet.value.match(/(^[a-zA-Z]|[0-9])/)) {
                this.generateMessage(objetMessage, "Valide.", color[0]);
                checkArray[2] = true;
            } else {
                this.generateMessage(objetMessage, "Veuillez remplir ce champ.", color[1]);
                checkArray[2] = false;
            }
        })

        // Message
        message.addEventListener("change", () => {
            if (message.value.match(/(^[a-zA-Z]|[0-9])/)) {
                this.generateMessage(messageMessage, "Valide.", color[0]);
                checkArray[3] = true;
            } else {
                this.generateMessage(messageMessage, "Veuillez remplir ce champ.", color[1]);
                checkArray[3] = false;
            }
        })

        condition.addEventListener("change", () => {
            if (condition.checked === true) {
                checkArray[4] = true;
            } else {
                checkArray[4] = false;
            }
        })

        
        form.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "http://localhost:5500/pages/message.html"
        })

        // Change le bouton si tout est valide.
        form.addEventListener("change", e => {
            if (checkArray.includes(false)) {
                formBtn.style.opacity = "0.5";
                formBtn.disabled = true;
            } else {
                formBtn.style.opacity = "1";
                formBtn.disabled = false;
            }
        })
        
        if (checkArray.includes(false)) {
            formBtn.style.opacity = "0.5";
            formBtn.setAttribute("disabled", true);
        }
    }

    /**
     * Génére un message.
     * @param {Object} element 
     * @param {String} message 
     * @param {String} color 
     */
    generateMessage(element, message, color) {
        element.textContent = message;
        element.style.color = color;
    }
}