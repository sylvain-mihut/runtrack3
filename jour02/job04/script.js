var textarea = document.getElementById("keylogger");

// Fonction qui gère l'événement de frappe sur le clavier
function keyPressHandler(event) {
    var char = String.fromCharCode(event.keyCode).toLowerCase();

    // Vérifie si le focus est dans le textarea
    if (document.activeElement === textarea) {
        // Ajoute le caractère deux fois dans le textarea
        textarea.value += char;
    } else {
        // Ajoute le caractère une fois dans le textarea
        textarea.value += char;
    }
}

// Ajoute un écouteur d'événement pour l'événement de frappe sur le clavier
document.addEventListener("keydown", keyPressHandler);