function jourtravaille(date) {
    var annee = date.getFullYear();
    var joursFeries2020 = [
        new Date(annee, 0, 1),    // 1er janvier
        new Date(annee, 3, 13),   // 13 avril pâques
        new Date(annee, 4, 1),    // 1er mai
        new Date(annee, 4, 8),    // 8 mai
        new Date(annee, 4, 21),   // 21 mai
        new Date(annee, 5, 1),    // 1er juin
        new Date(annee, 6, 14),   // 14 juillet
        new Date(annee, 7, 15),   // 14 août
        new Date(annee, 10, 1),   // 1er novembre
        new Date(annee, 10, 11),  // 11 novembre
        new Date(annee, 11, 25)   // 25 décembre
    ];

    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();

    if (joursFeries2020.some(function(jourFerie) {
        return jourFerie.getDate() === jour && jourFerie.getMonth() === date.getMonth();
    })) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}
  
  var date = new Date(2020, 0, 1); // 1er janvier 2020
  jourtravaille(date);