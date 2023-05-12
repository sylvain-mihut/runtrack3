// Créez un <button> ayant comme id “button”. Créez un fichier expression.txt contenant
// votre expression favorite.
// Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le contenu du
// fichier expression.txt, placez le dans un paragraphe <p> et insérez-le dans le corps de
// votre page.


$(document).ready(function(){ 
    fetch('expression.txt')
        .then(read => read.text())
        // console.log(read)
        .then(data => {
            console.log(data)
                $('#button').click(function(){
                    $('p').append(data)
            });
        })
    })
        

