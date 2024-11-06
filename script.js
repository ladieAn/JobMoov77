document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée avec succès !");
    
    // Ajout d'un événement au clic sur un bouton
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('Bouton cliqué !');
    });
});
