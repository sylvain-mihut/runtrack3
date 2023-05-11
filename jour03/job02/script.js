// Tableau contenant les URLs des images
var images = [
    './img/arc1.pnj',
    './img/arc2.pnj',
    './img/arc3.pnj',
    './img/arc4.pnj',
    './img/arc5.pnj',
    './img/arc6.pnj',
  ];
  
  // Fonction pour mélanger les éléments d'un tableau
  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Tant qu'il reste des éléments à mélanger
    while (0 !== currentIndex) {
  
      // Sélectionne un élément restant
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Échange avec l'élément actuel
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }