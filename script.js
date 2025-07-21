// sélectionne le bouton de bascule du menu mobile 
const mobileToggle = document.getElementById('mobileToggle');
// sélectionne le menu de navigation 
const navMenu = document.getElementById('navMenu');

// gère le basculement du menu mobile 
mobileToggle.addEventListener('click', function () {
    navMenu.classList.toggle('nav-open');

    // Changer l'icon du toggle lors de l'ouverture/fermeture du menu
    if (navMenu.classList.contains('nav-open')) {
        mobileToggle.textContent = '✕';
    } else {
        mobileToggle.textContent = '☰';
    }
});

// fermer le menu mobile lors du clic à l'extérieur
document.addEventListener('click', function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = mobileToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
        mobileToggle.textContent = '☰';
    }
});

// fermer la fenêtre de menu mobile lors du redimensionnement de la fenêtre
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('nav-open');
        mobileToggle.textContent = '☰';
    }
});

/* sélectionne le champ de recherche */
const searchInput = document.querySelector('.search-input')
/* sélectionne toutes les cartes de modèles */
const modelCards = document.querySelectorAll('.model-card')

/* ajoute un écouteur d'événement pour la saisie dans le champ de recherche */
searchInput.addEventListener('input', function () {
    /* récupère la valeur saisie en minuscules */
    const searchTerm = this.value.toLowerCase()

    /* parcourt chaque carte de modèle */
    modelCards.forEach(card => {
        /* récupère le titre et le contenu de la carte */
        const title = card.querySelector('.card-title').textContent.toLowerCase()
        const content = card.querySelector('.card-content p').textContent.toLowerCase()

        /* vérifie si le terme de recherche est dans le titre ou le contenu */
        const isMatch = title.includes(searchTerm) || content.includes(searchTerm)

        /* affiche ou masque la carte selon la correspondance */
        card.style.display = isMatch ? 'flex' : 'none'
    })
})

// gère l'affichage des éléments FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');

        // Fermer les autres éléments FAQ ouverts
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});

/* sélectionne l'élément pour afficher l'année */
const yearElement = document.getElementById('current-year')

/* récupère l'année actuelle */
const currentYear = new Date().getFullYear()

/* insère l'année dans l'élément */
yearElement.textContent = currentYear