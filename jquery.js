// On attend que la page soit chargée
$(document).ready(function () {

    // ===== MENU BURGER =====
    // Clique sur le burger → ouvre/ferme le menu
    $("#burger").click(function () {
        $("#menu").slideToggle(300);
    });


    // ===== ACCORDEON PROJETS =====

    // Cache la liste des projets au départ
    $("#listeProjets").hide();

    // Clique sur le bouton principal
    $("#btnProjets").click(function () {
        $("#listeProjets").slideToggle(300); // ouvre/ferme la liste
    });


    // Cache tous les contenus des projets
    $(".contenu-projet").hide();

    // Clique sur un projet
    $(".titre-projet").click(function () {

        // Récupère le contenu juste après le bouton cliqué
        let contenu = $(this).next();

        // Ferme tous les autres projets
        $(".contenu-projet").not(contenu).slideUp(300);

        // Ouvre/ferme le projet sélectionné
        contenu.slideToggle(300);
    });


    // ===== ACCORDEON TODO =====

    // Cache le contenu au départ
    $("#contenuAccordeon").hide();

    // Bouton afficher / masquer
    $("#btnAccordeon").click(function () {
        $("#contenuAccordeon").slideToggle(300);
    });
    

    // Rotation de la flèche (⚠️ exécuté au chargement)
    $("#arrow").toggleClass("rotate");

});


// ===== CAROUSEL =====

// Index de la slide actuelle
let index = 0;

// Récupère toutes les images du carousel
let slides = $(".slide");

// Fonction pour afficher une slide
function showSlide(i) {

    // Enlève la classe active sur toutes les images
    slides.removeClass("active");

    // Ajoute la classe active à la bonne image
    slides.eq(i).addClass("active");
}

// Affiche la première image
showSlide(index);


// Bouton suivant
$("#next").click(function () {
    index++;

    // Si on dépasse → on revient au début
    if (index >= slides.length) index = 0;

    showSlide(index);
});


// Bouton précédent
$("#prev").click(function () {
    index--;

    // Si on est en dessous → on va à la fin
    if (index < 0) index = slides.length - 1;

    showSlide(index);
});


// Défilement automatique toutes les 4 secondes
setInterval(function(){
    $("#next").click();
}, 4000);