// On attend que toute la page soit chargée avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {

    // Tableau contenant les tâches (chaque tâche = texte + état)
    let taches = [
        { texte: "valider prepa", faite: false },
    ];

    // Récupération des éléments HTML
    const inputTache = document.getElementById("inputTache");       // champ texte
    const boutonAjouter = document.getElementById("boutonAjouter"); // bouton ajouter
    const recherche = document.getElementById("recherche");         // champ recherche
    const tableauTaches = document.getElementById("tableauTaches"); // tableau


    // ===== AFFICHER LES TÂCHES =====
    function afficherTaches() {

        // Texte saisi dans la recherche (en minuscule)
        const motRecherche = recherche.value.toLowerCase();

        // On vide le tableau avant de le reconstruire
        tableauTaches.innerHTML = "";

        // Parcours de toutes les tâches
        taches.forEach(function (tache, index) {

            // Filtre : on affiche seulement si ça correspond à la recherche
            if (tache.texte.toLowerCase().includes(motRecherche)) {

                // Création d'une ligne du tableau
                const ligne = document.createElement("tr");

                // ===== CHECKBOX =====
                const celluleCheckbox = document.createElement("td");
                const checkbox = document.createElement("input");

                checkbox.type = "checkbox";
                checkbox.checked = tache.faite;

                // Quand on coche/décoche → met à jour la tâche
                checkbox.addEventListener("change", function () {
                    taches[index].faite = checkbox.checked;
                    afficherTaches(); // refresh affichage
                });

                celluleCheckbox.appendChild(checkbox);


                // ===== TEXTE =====
                const celluleTexte = document.createElement("td");
                celluleTexte.textContent = tache.texte;

                // Si tâche faite → style barré
                if (tache.faite) {
                    celluleTexte.classList.add("tache-faite");
                }


                // ===== BOUTON SUPPRIMER =====
                const celluleAction = document.createElement("td");
                const boutonSupprimer = document.createElement("button");

                boutonSupprimer.textContent = "Supprimer";
                boutonSupprimer.className = "bouton-supprimer";

                // Supprime la tâche du tableau
                boutonSupprimer.addEventListener("click", function () {
                    taches.splice(index, 1); // enlève 1 élément
                    afficherTaches();
                });

                celluleAction.appendChild(boutonSupprimer);


                // Ajout des cellules à la ligne
                ligne.appendChild(celluleCheckbox);
                ligne.appendChild(celluleTexte);
                ligne.appendChild(celluleAction);

                // Ajout de la ligne au tableau
                tableauTaches.appendChild(ligne);
            }
        });
    }


    // ===== AJOUTER UNE TÂCHE =====
    function ajouterTache() {

        // Récupère le texte sans espaces inutiles
        const texte = inputTache.value.trim();

        // Vérifie que ce n’est pas vide
        if (texte !== "") {

            // Ajoute une nouvelle tâche
            taches.push({
                texte: texte,
                faite: false
            });

            // Vide le champ
            inputTache.value = "";

            // Rafraîchit l'affichage
            afficherTaches();
        }
    }


    // ===== ÉVÉNEMENTS =====

    // Clic sur bouton "Ajouter"
    boutonAjouter.addEventListener("click", ajouterTache);

    // Appui sur "Entrée" dans le champ
    inputTache.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            ajouterTache();
        }
    });

    // Recherche en temps réel
    recherche.addEventListener("input", afficherTaches);


    // Affichage initial
    afficherTaches();

});