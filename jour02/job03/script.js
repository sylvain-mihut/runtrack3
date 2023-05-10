// Obtention de la référence à la balise <button> et à la balise <p>
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur
var count = 0;

// Fonction qui sera appelée lorsqu'un clic se produit sur le bouton
function addone() {
  // Incrémentation du compteur
  count++;
  
  // Mise à jour du contenu de la balise <p> avec la nouvelle valeur du compteur
  compteur.textContent = count.toString();
}

// Ajout d'un écouteur d'événement "click" sur le bouton pour appeler la fonction addone()
button.addEventListener("click", addone);
