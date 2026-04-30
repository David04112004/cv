// ===== ANIMATION AU SCROLL =====

// Fonction qui fait apparaître les éléments quand on scroll
function revealOnScroll() {

    // On sélectionne tous les éléments avec la classe "reveal"
    const elements = document.querySelectorAll(".reveal");

    // On parcourt chaque élément
    elements.forEach(el => {

        // Hauteur de la fenêtre visible
        const windowHeight = window.innerHeight;

        // Position de l'élément par rapport au haut de l'écran
        const elementTop = el.getBoundingClientRect().top;

        // Si l'élément est visible dans l'écran (avec une marge de 80px)
        if (elementTop < windowHeight - 80) {

            // On ajoute la classe "visible" → déclenche l’animation CSS
            el.classList.add("visible");
        }
    });
}

// On lance la fonction à chaque scroll
window.addEventListener("scroll", revealOnScroll);

// On lance aussi au chargement de la page (utile si déjà visible)
window.addEventListener("load", revealOnScroll);



// ===== MODE SOMBRE (DARK MODE) =====

// Fonction appelée quand on clique sur le bouton 🌙
function toggleDarkMode() {

    // Ajoute ou enlève la classe "dark-mode" sur le body
    document.body.classList.toggle("dark-mode");

    // Si le mode sombre est activé
    if (document.body.classList.contains("dark-mode")) {

        // On sauvegarde dans le navigateur (localStorage)
        localStorage.setItem("darkMode", "enabled");

    } else {

        // Sinon on sauvegarde qu’il est désactivé
        localStorage.setItem("darkMode", "disabled");
    }
}


// ===== PERSISTANCE DU MODE SOMBRE =====

// Au chargement de la page
window.addEventListener("load", () => {

    // Si l'utilisateur avait activé le dark mode précédemment
    if (localStorage.getItem("darkMode") === "enabled") {

        // On le réactive automatiquement
        document.body.classList.add("dark-mode");
    }
});