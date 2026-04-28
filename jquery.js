$(document).ready(function () {

    $("#burger").click(function () {
        $("#menu").slideToggle(300);
    });

    $("#contenuAccordeon").hide();

    $("#btnAccordeon").click(function () {
        $("#contenuAccordeon").slideToggle(300);
    });

});