$(document).ready(function () {

    $("#burger").click(function () {
        $("#menu").slideToggle(300);
    });

    $("#listeProjets").hide();

    $("#btnProjets").click(function () {
        $("#listeProjets").slideToggle(300);
    });

    $(".contenu-projet").hide();

    $(".titre-projet").click(function () {
        let contenu = $(this).next();
        $(".contenu-projet").not(contenu).slideUp(300);
        contenu.slideToggle(300);
    });

    $("#contenuAccordeon").hide();

    $("#btnAccordeon").click(function () {
        $("#contenuAccordeon").slideToggle(300);
    });
    
    $("#arrow").toggleClass("rotate");


});

// CAROUSEL

let index = 0;
let slides = $(".slide");

function showSlide(i) {
    slides.removeClass("active");
    slides.eq(i).addClass("active");
}

showSlide(index);

$("#next").click(function () {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
});

$("#prev").click(function () {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
});
setInterval(function(){
    $("#next").click();
}, 4000);