class Carousel {
    auto() {
        const container = document.querySelector(".accueil-carousel-container");
        const maxCount = container.children.length;
        let count = 1;
        
        setInterval(() => {
            let viewNow = window.screen.availWidth * count;
            
            count++;
            if (count === maxCount) {
                count = 0;
                
                // Si on arrive à la fin des images du carousel affiche la première sans animation.
                setTimeout(() => {
                    viewNow = window.screen.availWidth * count;
                    container.style.transition = "none"
                    container.style.transform = "translateX(-"+ viewNow.toString() + "px)";

                    setTimeout(() => {
                        container.style.transition = "all 500ms ease-in";
                    }, 300) 
                }, 600)
            }

            if (count < maxCount) {
                container.style.transform = "translateX(-"+ viewNow.toString() + "px)";
            }

        }, 3000)
    }
}

export default Carousel;