document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            "image": "assets/images/slideshow/slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
        },
        {
            "image": "assets/images/slideshow/slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
        },
        {
            "image": "assets/images/slideshow/slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
        },
        {
            "image": "assets/images/slideshow/slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
        },
        {
            "image": "assets/images/slideshow/slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
        },
    ];

    let currentSlideIndex = 0;

    const bannerImg = document.querySelector("#banner .banner-img");
    const tagLine = document.querySelector("#banner p");
    const dotsContainer = document.querySelector("#banner .dots");

    // Fonction pour mettre à jour l'affichage avec la diapositive actuelle
    function updateSlide() {
        // Mise à jour de l'image et du texte
        bannerImg.src = slides[currentSlideIndex].image;
        tagLine.innerHTML = slides[currentSlideIndex].tagLine;
        // Mise à jour des points (bullets)
        updateDots();
    }

    // Fonction pour mettre à jour les points (bullets)
    function updateDots() {
        dotsContainer.innerHTML = ""; // Efface tous les points

        // Utilisez Math.min pour garantir que vous n'avez pas plus de points que de diapositives
        for (let i = 0; i < Math.min(4, slides.length); i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === currentSlideIndex) {
                dot.classList.add("dot_selected");
            }

            // Ajouter un gestionnaire d'événements au clic sur le point
            dot.addEventListener("click", function () {
                currentSlideIndex = i;
                updateSlide();
            });

            dotsContainer.appendChild(dot);
        }
    }

    // Attacher des gestionnaires d'événements aux flèches
    const arrowLeft = document.querySelector('#banner .arrow_left');
    const arrowRight = document.querySelector('#banner .arrow_right');

    arrowLeft.addEventListener("click", function () {
        console.log("Clic sur la flèche gauche !");
        // Vérifier si on est à la première image
        if (currentSlideIndex === 0) {
            // Si oui, passer à la dernière image
            currentSlideIndex = slides.length - 1;
        } else {
            // Sinon, décrémenter l'index normalement
            currentSlideIndex--;
        }
        updateSlide();
    });

    arrowRight.addEventListener("click", function () {
        console.log("Clic sur la flèche droite !");
        // Vérifier si on est à la dernière image
        if (currentSlideIndex === slides.length - 1) {
            // Si oui, passer à la première image
            currentSlideIndex = 0;
        } else {
            // Sinon, incrémenter l'index normalement
            currentSlideIndex++;
        }
        updateSlide();
    });

    // Initialiser l'affichage avec la première diapositive
    updateSlide();
});
