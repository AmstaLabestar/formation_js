// const input = document.getElementById("tache");
// const button = document.getElementById("ajouter");
// const liste = document.getElementById("liste");

// button.addEventListener("click", () => {
//   const texte = input.value.trim();

//   if (texte !== "") {
//     const li = document.createElement("li");
//     li.textContent = texte;

//     // Bouton pour supprimer
//     const btnSuppr = document.createElement("button");
//     btnSuppr.textContent = "❌";
//     btnSuppr.onclick = () => li.remove();

//     // Clic sur la tâche = la marquer comme terminée
//     li.addEventListener("click", () => {
//       li.classList.toggle("done");
//     });

//     li.appendChild(btnSuppr);
//     liste.appendChild(li);

//     input.value = "";
//     input.focus();
//   } else {
//     alert("Saisis une tâche !");
//   }
// });




const input = document.getElementById("tache");
const button = document.getElementById("ajouter");
const liste = document.getElementById("liste");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function afficherTodos() {
  liste.innerHTML = ""; // Réinitialiser l’affichage

  todos.forEach((texte, index) => {
    const li = document.createElement("li");
    li.textContent = texte;

    // Marquer comme fait (bonus, tu peux améliorer ça avec un objet {texte, fait})
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "❌";
    btnSuppr.onclick = () => {
      todos.splice(index, 1);               // Supprimer du tableau
      sauvegarderEtAfficher();              // Sauvegarder et rafraîchir
    };

    li.appendChild(btnSuppr);
    liste.appendChild(li);
  });
}

function sauvegarderEtAfficher() {
  localStorage.setItem("todos", JSON.stringify(todos)); // Sauvegarde en JSON
  afficherTodos();
}

button.addEventListener("click", () => {
  const texte = input.value.trim();

  if (texte !== "") {
    todos.push(texte);           // Ajouter la tâche dans le tableau
    sauvegarderEtAfficher();     // Sauvegarder + rafraîchir
    input.value = "";
    input.focus();
  } else {
    alert("Saisis une tâche !");
  }
});

// Charger les tâches enregistrées au démarrage
afficherTodos();

