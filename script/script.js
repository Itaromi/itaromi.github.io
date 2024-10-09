let statusArray = ["Developers Frontend", "Developers Backend", "Streamer", "Contractor"];
let currentIndex = 0;
let h2Element = document.getElementById("status");

function typeWriter(text, index, callback) {
    if (index < text.length) {
        h2Element.textContent += text.charAt(index); // Ajoute chaque lettre progressivement
        setTimeout(() => {
            typeWriter(text, index + 1, callback);
        }, 100); // Délai de 100 ms entre chaque lettre
    } else {
        setTimeout(callback, 1000); // Attendre 1 seconde avant de commencer la suppression
    }
}

function deleteText(text, index, callback) {
    if (index >= 0) {
        h2Element.textContent = text.substring(0, index); // Supprime les lettres une par une
        setTimeout(() => {
            deleteText(text, index - 1, callback);
        }, 100); // Délai de 100 ms entre chaque suppression
    } else {
        callback(); // Appeler le callback une fois le texte complètement supprimé
    }
}

function startTextAnimation() {
    let currentText = statusArray[currentIndex];
    typeWriter(currentText, 0, () => {
        deleteText(currentText, currentText.length, () => {
            // Passer au prochain texte dans le tableau
            currentIndex = (currentIndex + 1) % statusArray.length;
            startTextAnimation(); // Recommencer l'animation avec le texte suivant
        });
    });
}

// Lancer l'animation
startTextAnimation();