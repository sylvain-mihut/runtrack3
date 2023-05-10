// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté au contenu
// de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doivent être gérées dans une fonction nommée “showhide()”.

let button = document.getElementById('button');

let article = document.createElement('article');
article.setAttribute('id', 'article');
article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

// Fonction pour gérer l'apparition/disparition de l'article
function toggleArticle() {
    let article = document.getElementById('article');
    
    // Vérifier si l'article est déjà affiché
    if (article.style.display === 'block') {
      // Si oui, le cacher
      article.style.display = 'none';
    } else {
      // Sinon, l'afficher
      article.style.display = 'block';
    }
}

// Ajouter un événement de clic au bouton
button.addEventListener('click', function() {
    // Appeler la fonction pour gérer l'apparition/disparition de l'article
    toggleArticle();
});

// Cacher l'article au chargement de la page
article.style.display = 'none';

// Ajouter l'article à la page
document.body.appendChild(article);