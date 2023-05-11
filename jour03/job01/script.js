// Créez une balise <button> et sélectionnez-la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
// ensuite on prie.”
// Ensuite, créez un bouton qui servira à cacher tout l’élément HTML.

$(document).ready(function(){
    $('#button').click(function(){
        $('div').append("Les logiciels et les cathédrales, c'est un peu la même chose. D'abord on les construit, ensuite on prie.");
    })
})

$(document).ready(function(){
    $('#button2').click(function(){
        $('div').empty();
    })
})
