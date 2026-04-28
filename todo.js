document.addEventListener("DOMContentLoaded", function () {
    let taches = [
        { texte: "Terminer le TP5", faite: false },
        { texte: "Tester l’ajout d’une tâche", faite: false },
        { texte: "Vérifier la recherche", faite: false }
    ];

    const inputTache = document.getElementById("inputTache");
    const boutonAjouter = document.getElementById("boutonAjouter");
    const recherche = document.getElementById("recherche");
    const tableauTaches = document.getElementById("tableauTaches");

    function afficherTaches() {
        const motRecherche = recherche.value.toLowerCase();
        tableauTaches.innerHTML = "";

        taches.forEach(function (tache, index) {
            if (tache.texte.toLowerCase().includes(motRecherche)) {
                const ligne = document.createElement("tr");

                const celluleCheckbox = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = tache.faite;

                checkbox.addEventListener("change", function () {
                    taches[index].faite = checkbox.checked;
                    afficherTaches();
                });

                celluleCheckbox.appendChild(checkbox);

                const celluleTexte = document.createElement("td");
                celluleTexte.textContent = tache.texte;

                if (tache.faite) {
                    celluleTexte.classList.add("tache-faite");
                }

                const celluleAction = document.createElement("td");
                const boutonSupprimer = document.createElement("button");
                boutonSupprimer.textContent = "Supprimer";
                boutonSupprimer.className = "bouton-supprimer";

                boutonSupprimer.addEventListener("click", function () {
                    taches.splice(index, 1);
                    afficherTaches();
                });

                celluleAction.appendChild(boutonSupprimer);

                ligne.appendChild(celluleCheckbox);
                ligne.appendChild(celluleTexte);
                ligne.appendChild(celluleAction);

                tableauTaches.appendChild(ligne);
            }
        });
    }

    function ajouterTache() {
        const texte = inputTache.value.trim();

        if (texte !== "") {
            taches.push({
                texte: texte,
                faite: false
            });

            inputTache.value = "";
            afficherTaches();
        }
    }

    boutonAjouter.addEventListener("click", ajouterTache);

    inputTache.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            ajouterTache();
        }
    });

    recherche.addEventListener("input", afficherTaches);

    afficherTaches();
});