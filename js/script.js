/* Sélectionne le bouton de bascule du menu mobile */
const mobileToggle = document.getElementById('mobileToggle');
/* Sélectionne le menu mobile */
const mobileMenu = document.getElementById('mobileMenu');

/* Gère le basculement du menu mobile */
mobileToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');

    /* Changer l'icône du toggle lors de l'ouverture/fermeture du menu */
    if (mobileMenu.classList.contains('active')) {
        mobileToggle.textContent = '✕';
        mobileToggle.setAttribute('aria-expanded', 'true');
    } else {
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Fermer le menu mobile lors du clic sur un lien du menu */
document.querySelectorAll('.nav__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    });
});

/* Fermer le menu mobile lors du clic à l'extérieur */
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav');

    /* Vérifier si le clic est à l'extérieur de toute la navigation */
    if (!nav.contains(event.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Fermer le menu mobile lors du redimensionnement de la fenêtre */
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Gestion du clavier pour l'accessibilité */
mobileToggle.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        mobileToggle.click();
    }
});

/* Fermer le menu avec la touche Escape */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus(); /* Remettre le focus sur le bouton */
    }
});

/* Sélectionne le champ de recherche */
const searchInput = document.querySelector('.search-input');
/* Sélectionne toutes les cartes de modèles */
const modelCards = document.querySelectorAll('.model-card');
/* Pagination elements */
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const paginationNumbers = document.getElementById('paginationNumbers');

const modelsPerPage = 9;
let currentPage = 1;
let filteredCards = Array.from(modelCards); // Initially, all cards are shown

/* Function to update pagination display */
function updatePagination() {
    const totalPages = Math.ceil(filteredCards.length / modelsPerPage);

    /* Update model cards display */
    modelCards.forEach(card => {
        card.style.display = 'none';
    });
    const start = (currentPage - 1) * modelsPerPage;
    const end = start + modelsPerPage;
    filteredCards.slice(start, end).forEach(card => {
        card.style.display = 'flex';
    });

    /* Update pagination buttons */
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    /* Update pagination numbers */
    paginationNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.classList.add('pagination-number');
        btn.textContent = i;
        if (i === currentPage) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            currentPage = i;
            updatePagination();
        });
        paginationNumbers.appendChild(btn);
    }
}

/* Ajoute un écouteur d'événement pour la saisie dans le champ de recherche */
searchInput.addEventListener('input', function () {
    /* Récupère la valeur saisie en minuscules */
    const searchTerm = this.value.toLowerCase();
    filteredCards = Array.from(modelCards).filter(card => {
        /* Récupère le titre et le contenu de la carte */
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const content = card.querySelector('.card-content p').textContent.toLowerCase();

        /* Vérifie si le terme de recherche est dans le titre ou le contenu */
        return title.includes(searchTerm) || content.includes(searchTerm);
    });

    currentPage = 1; /* Reset to first page on search */
    updatePagination();
});

/* Pagination button listeners */
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredCards.length / modelsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

/* Initial pagination setup */
updatePagination();

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

/* Sélectionne l'élément pour afficher l'année */
const yearElement = document.getElementById('current-year');

/* Récupère l'année actuelle */
const currentYear = new Date().getFullYear();

/* Insère l'année dans l'élément */
yearElement.textContent = currentYear;