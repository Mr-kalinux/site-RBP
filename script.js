// ===== NAVIGATION ACTIVE =====
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
});

// Mettre à jour le lien actif dans la navigation
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== DONNÉES DES GALERIES ===== 
const galleriesData = {
    patrimoine: {
        title: 'Gérer le patrimoine informatique',
        description: 'Gestion, inventaire et maintenance du parc informatique',
        images: [
            { src: '../assets/images/patrimoine1.jpg', alt: 'Patrimoine 1' },
            { src: '../assets/images/patrimoine2.jpg', alt: 'Patrimoine 2' },
            { src: '../assets/images/patrimoine3.jpg', alt: 'Patrimoine 3' }
        ]
    },
    incidents: {
        title: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
        description: 'Support utilisateur et gestion des incidents informatiques',
        images: [
            { src: '../assets/images/incidents1.jpg', alt: 'Incidents 1' },
            { src: '../assets/images/incidents2.jpg', alt: 'Incidents 2' },
            { src: '../assets/images/incidents3.jpg', alt: 'Incidents 3' }
        ]
    },
    presence: {
        title: 'Développer la présence en ligne de l\'organisation',
        description: 'Création et gestion de présence web et réseaux sociaux',
        images: [
            { src: '../assets/images/presence1.jpg', alt: 'Présence 1' },
            { src: '../assets/images/presence2.jpg', alt: 'Présence 2' }
        ]
    },
    projet: {
        title: 'Travail en mode projet',
        description: 'Gestion de projets informatiques et collaboration d\'équipe',
        images: [
            { src: '../assets/images/projet1.jpg', alt: 'Projet 1' },
            { src: '../assets/images/projet2.jpg', alt: 'Projet 2' },
            { src: '../assets/images/projet3.jpg', alt: 'Projet 3' }
        ]
    },
    service: {
        title: 'Mettre à disposition des utilisateurs un service informatique',
        description: 'Déploiement et administration de services informatiques',
        images: [
            { src: '../assets/images/service1.jpg', alt: 'Service 1' },
            { src: '../assets/images/service2.jpg', alt: 'Service 2' }
        ]
    },
    developpement: {
        title: 'Organiser son développement professionnel',
        description: 'Formation continue et développement des compétences',
        images: [
            { src: '../assets/images/dev1.jpg', alt: 'Développement 1' },
            { src: '../assets/images/dev2.jpg', alt: 'Développement 2' },
            { src: '../assets/images/dev3.jpg', alt: 'Développement 3' }
        ]
    }
};

// Variable pour tracker l'index actuel des images
let currentGalleryName = '';
let currentImageIndex = 0;

// ===== OUVERTURE MODAL GALERIE AVEC NAVIGATION ===== 
function openGalleryModal(galleryName) {
    const modal = document.getElementById('galleryModal');
    const titleEl = document.getElementById('galleryTitle');
    const descriptionEl = document.getElementById('galleryDescription');
    const imageEl = document.getElementById('galleryImage');
    const indicatorsContainer = document.getElementById('galleryIndicators');
    
    if (!modal || !galleriesData[galleryName]) return;
    
    currentGalleryName = galleryName;
    currentImageIndex = 0;
    
    const gallery = galleriesData[galleryName];
    
    // Mise à jour du titre et description
    titleEl.textContent = gallery.title;
    descriptionEl.textContent = gallery.description;
    
    // Afficher la première image
    imageEl.src = gallery.images[0].src;
    imageEl.alt = gallery.images[0].alt;
    
    // Créer les indicateurs
    indicatorsContainer.innerHTML = '';
    gallery.images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'gallery-indicator' + (index === 0 ? ' active' : '');
        indicator.onclick = () => goToImage(index);
        indicatorsContainer.appendChild(indicator);
    });
    
    // Afficher la modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== FERMETURE MODAL GALERIE ===== 
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== NAVIGATION GALERIE ===== 
function nextImage() {
    const gallery = galleriesData[currentGalleryName];
    if (!gallery) return;
    
    currentImageIndex = (currentImageIndex + 1) % gallery.images.length;
    updateGalleryImage();
}

function prevImage() {
    const gallery = galleriesData[currentGalleryName];
    if (!gallery) return;
    
    currentImageIndex = (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
    updateGalleryImage();
}

function goToImage(index) {
    currentImageIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const gallery = galleriesData[currentGalleryName];
    if (!gallery) return;
    
    const imageEl = document.getElementById('galleryImage');
    imageEl.src = gallery.images[currentImageIndex].src;
    imageEl.alt = gallery.images[currentImageIndex].alt;
    
    // Mettre à jour les indicateurs
    const indicators = document.querySelectorAll('.gallery-indicator');
    indicators.forEach((ind, index) => {
        if (index === currentImageIndex) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active');
        }
    });
}

// ===== MODAL POUR LES IMAGES =====
function openModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        modal.classList.add('active');
        modalImage.src = imagePath;
        document.body.style.overflow = 'hidden'; // Empêcher le scroll
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    }
}

// Fermer la modal en cliquant en dehors
document.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('galleryModal');
    
    if (galleryModal && event.target === galleryModal) {
        closeGalleryModal();
    }
});

// Fermer la modal avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ANIMATIONS AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes et sections
document.querySelectorAll('.card, .skill-card, .file-card, .contact-item, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== CHANGEMENT ACTIF DE LIEN NAV AU SCROLL =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    // Mettre à jour les liens actifs
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes('#' + current)) {
            link.classList.add('active');
        }
    });
});

// ===== EFFET DE PARALLAX (optionnel) =====
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = 'center ' + (window.scrollY * 0.5) + 'px';
    }
});

// ===== MODALS DES STAGES (Parcours) =====
function openStageModal(stageId) {
    const modal = document.getElementById(stageId + 'Modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeStageModal(stageId) {
    const modal = document.getElementById(stageId + 'Modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Fermer les modals des stages en cliquant à l'extérieur
document.addEventListener('click', function(event) {
    const stageModals = document.querySelectorAll('.stage-modal');
    stageModals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Fermer les modals des stages avec la touche Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const stageModals = document.querySelectorAll('.stage-modal');
        stageModals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// ===== INITIALISATION AU CHARGEMENT =====
console.log('Portfolio Robin BARBAT-PATINAUD - Chargé avec succès ✓');
