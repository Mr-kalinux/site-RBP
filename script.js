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
        projects: [
            {
                name: 'Réalisation d\'un inventaire informatique',
                description: 'Via l\'outil Excel et des étiquettes, l\'ensemble du matériel informatique a été référencé.',
                images: [
                    { src: '../projet-stage/inventaire/plan-rdc.png', alt: 'Plan RDC', caption: 'Plan RDC — localisation des équipements et des postes.' },
                    { src: '../projet-stage/inventaire/plan-étage.png', alt: 'Plan étage', caption: 'Plan étage — répartition des postes par service.' },
                    { src: '../projet-stage/inventaire/liste-complète.png', alt: 'Liste complète', caption: 'Liste complète exportée depuis Excel contenant l\'inventaire.' },
                    { src: '../projet-stage/inventaire/liste-ecran-portable.png', alt: 'Liste écrans portables', caption: 'Détail des écrans portables identifiés et leurs caractéristiques.' },
                    { src: '../projet-stage/inventaire/liste-précise.png', alt: 'Liste précise', caption: 'Fiche précise avec numéros d\'étiquettes et informations techniques.' },
                    { src: '../projet-stage/inventaire/exemple-étiquette.jpg', alt: 'Exemple étiquette', caption: 'Exemple d\'étiquette utilisée pour l\'inventaire.' }
                ]
            },
            {
                name: 'Changement de poste dû à leur ancienneté',
                description: 'Des postes nécessitaient une modernisation ; de nouveaux PC ont été installés.',
                images: [
                    { src: '../projet-stage/changement-poste/ancien-pc.jpg', alt: 'Ancien PC', caption: 'Ancien PC — état avant remplacement.' },
                    { src: '../projet-stage/changement-poste/nouveau-pc.jpg', alt: 'Nouveau PC', caption: 'Nouveau PC — modèle installé pour moderniser le poste.' },
                    { src: '../projet-stage/changement-poste/install-windows-avec-données.jpg', alt: 'Installation Windows', caption: 'Installation de Windows avec migration des données et configuration finale.' }
                ]
            }
        ]
    },
    incidents: {
        title: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
        description: 'Support utilisateur et gestion des incidents informatiques',
        projects: [
            {
                name: 'Test de connectique',
                description: 'Test de connectique entre deux points reliés par un câble sous terre.',
                images: [
                    { src: '../projet-stage/test-connectic/batiment-relier-cable-sous-terre.png', alt: 'Bâtiments reliés par câble sous terre', caption: 'Repérage des deux bâtiments reliés par le câblage enterré.' },
                    { src: '../projet-stage/test-connectic/test-connect.jpg', alt: 'Test de connexion', caption: 'Vérification de la connectivité entre les deux points du réseau.' }
                ]
            },
            {
                name: 'Installation d\'un triple écran',
                description: 'Installation d\'un triple écran',
                images: [
                    { src: '../projet-stage/installation-triple-ecran/déballage-ecran.jpg', alt: 'déballage-écran', caption: 'arrivée sur site, déballage des nouveaux écrans à installer' },
                    { src: '../projet-stage/installation-triple-ecran/accroche-ecran.jpg', alt: 'accroche-ecran', caption: 'montage de la pièce qui va permettre de tenir l\'écran avec le support spécifique' },
                    { src: '../projet-stage/installation-triple-ecran/cablage-ecran.jpg', alt: 'cablage-ecran', caption: 'ajout d\'un équipement multi-port pour tout centraliser sur un appareil' },
                    { src: '../projet-stage/installation-triple-ecran/montage-finale.jpg', alt: 'montage-finale', caption: 'le triple écran est monté (donc 4 écran avec le pc portable), les anciens écrans ont servis pour un autre poste)' }
                ]
            },
            {
                name: 'Changement de poste dû à leur ancienneté',
                description: 'Des postes nécessitaient une modernisation ; de nouveaux PC ont été installés.',
                images: [
                    { src: '../projet-stage/changement-poste/ancien-pc.jpg', alt: 'Ancien PC', caption: 'Ancien PC — état avant remplacement.' },
                    { src: '../projet-stage/changement-poste/nouveau-pc.jpg', alt: 'Nouveau PC', caption: 'Nouveau PC — modèle installé pour moderniser le poste.' },
                    { src: '../projet-stage/changement-poste/install-windows-avec-données.jpg', alt: 'Installation Windows', caption: 'Installation de Windows avec migration des données et configuration finale.' }
                ]
            },
            {
                name: 'Hashcat',
                description: 'Un fichier Excel bloqué par un mot de passe devait être débloqué. Après des tentatives classiques sans résultat, une solution de contournement a été testée avec Hashcat.',
                images: [
                    { src: '../projet-stage/hashcat/fichier-excel.jpg', alt: 'Fichier Excel protégé', caption: 'Fichier source protégé par mot de passe à analyser.' },
                    { src: '../projet-stage/hashcat/outil-pour-bon-paramètres.jpg', alt: 'Paramétrage de l\'outil', caption: 'Sélection des bons paramètres pour lancer l\'attaque de récupération.' },
                    { src: '../projet-stage/hashcat/exec-hashcat.jpg', alt: 'Exécution de Hashcat', caption: 'Lancement de Hashcat et suivi de la progression de la recherche.' }
                ]
            },
            {
                name: 'Brassage',
                description: 'L\'infrastructure d\'un garage avait besoin d\'une remise en état et d\'une évolution de son réseau.',
                images: [
                    { src: '../projet-stage/Brassage/infra-de-base.jpg', alt: 'Infrastructure de base', caption: 'État initial de l\'infrastructure avant intervention.' },
                    { src: '../projet-stage/Brassage/baie-brassage.jpg', alt: 'Baie de brassage', caption: 'Préparation et organisation de la baie de brassage.' },
                    { src: '../projet-stage/Brassage/brassage-equipement-restant.jpg', alt: 'Brassage des équipements restants', caption: 'Raccordement des derniers équipements réseau.' },
                    { src: '../projet-stage/Brassage/brassge-cable-apparant.jpg', alt: 'Câble apparent', caption: 'Correction et reprise des passages de câbles apparents.' },
                    { src: '../projet-stage/Brassage/Brassage-finit-complet.jpg', alt: 'Brassage final complet', caption: 'Résultat final après remise en forme complète du brassage.' }
                ]
            }
        ]
    },
    presence: {
        title: 'Développer la présence en ligne de l\'organisation',
        description: 'Création et gestion de présence web et réseaux sociaux',
        projects: [
            {
                name: 'Mes stages',
                description: 'Dans le but de développer mon profil professionnel, j\'ai publié mes stages réalisés afin de renforcer ma visibilité auprès des entreprises concernées.',
                images: [
                    { src: '../projet-stage/linkedin/experience-linkedin.png', alt: 'Expériences LinkedIn', caption: 'Publication des expériences de stage pour valoriser les missions réalisées.' },
                    { src: '../projet-stage/linkedin/relation-linkedin.png', alt: 'Relations LinkedIn', caption: 'Développement du réseau professionnel grâce aux connexions et interactions.' }
                ]
            },
            {
                name: 'Réalisation d\'une procédure',
                description: 'Comme aucune procédure n\'existait pour la préparation des téléphones, je me suis chargé de la concevoir et de la formaliser.',
                images: [
                    { src: '../projet-stage/procédure/1.jpg', alt: 'Procédure - étape 1', caption: 'Structuration de la première partie de la procédure de préparation.' },
                    { src: '../projet-stage/procédure/2.jpg', alt: 'Procédure - étape 2', caption: 'Finalisation de la procédure avec les étapes complètes et les contrôles.' }
                ]
            }
        ]
    },
    projet: {
        title: 'Travail en mode projet',
        description: 'Gestion de projets informatiques et collaboration d\'équipe',
        projects: [
            {
                name: 'Hackathon AIRBUS/RENAULT',
                description: 'Une proposition de participer à un hackathon m\'a été faite, ce qui m\'a permis de comprendre comment les professionnels travaillent en mode projet.',
                images: [
                    { src: '../projet-stage/hackathon/écran-autre-participant.jpg', alt: 'Écran autre participant', caption: 'Observation des autres équipes lors de la session.' },
                    { src: '../projet-stage/hackathon/travail-postit.jpg', alt: 'Travail avec post-it', caption: 'Priorisation et organisation des tâches avec des post-it.' },
                    { src: '../projet-stage/hackathon/session-travail.jpg', alt: 'Session de travail', caption: 'Travail collaboratif en équipe pendant le hackathon.' },
                    { src: '../projet-stage/hackathon/guide.jpg', alt: 'Guide (à réorienter)', caption: 'Guide du hackathon — photo d\'une documentation (orientation corrigée à l\'affichage).', rotate: true },
                    { src: '../projet-stage/hackathon/taille-guide.jpg', alt: 'Taille du guide', caption: 'Vue détaillée du guide distribué aux participants.' },
                    { src: '../projet-stage/hackathon/photo-groupe-hack.jpg', alt: 'Photo de groupe', caption: 'Photo de l\'équipe et des participants à la clôture.' }
                ]
            }
        ]
    },
    service: {
        title: 'Mettre à disposition des utilisateurs un service informatique',
        description: 'Déploiement et administration de services informatiques',
        projects: [
            {
                name: 'Préparation de poste pour client',
                description: 'Préparation complète de postes de travail avec installation automatisée.',
                images: [
                    { src: '../projet-stage/Préparation-postes/pc-prépa.jpg', alt: 'PC à préparer', caption: 'Poste prêt à être déployé chez le client avant l’installation finale.' },
                    { src: '../projet-stage/Préparation-postes/install-windows-neuf.jpg', alt: 'Installation Windows neuve', caption: 'Installation de Windows 11 Pro à partir d’une clé dédiée et d’un script d’automatisation.' },
                    { src: '../projet-stage/Préparation-postes/script-execution.jpg', alt: 'Exécution du script', caption: 'Le script poursuit l’installation automatisée des applications utiles.' },
                    { src: '../projet-stage/Préparation-postes/script-install.jpg', alt: 'Script d’installation', caption: 'Script PowerShell utilisé pour automatiser l’installation logicielle.' },
                    { src: '../projet-stage/Préparation-postes/maj-windows.jpg', alt: 'Mises à jour Windows', caption: 'Application des mises à jour Windows pour livrer des postes à jour.' },
                    { src: '../projet-stage/Préparation-postes/maj-BIOS.jpg', alt: 'Mise à jour du BIOS', caption: 'Mise à jour du BIOS pour garantir stabilité et compatibilité.' },
                    { src: '../projet-stage/Préparation-postes/maj-driver.jpg', alt: 'Mise à jour des pilotes', caption: 'Installation des dernières versions de pilotes matériels.' }
                ]
            },
            {
                name: 'Synchronisation entre deux logiciels',
                description: 'Synchronisation des évènements entre l’application Outlook et ClickUp.',
                images: [
                    { src: '../projet-stage/synchronisation/partie-déjà-faite.png', alt: 'Partie déjà faite', caption: 'Première étape déjà réalisée pour préparer la synchronisation entre les deux outils.' },
                    { src: '../projet-stage/synchronisation/Première-version-Outlook.png', alt: 'Première version Outlook', caption: 'Première version du flux de synchronisation depuis Outlook.' },
                    { src: '../projet-stage/synchronisation/Exemple-recupération-données.png', alt: 'Exemple de récupération des données', caption: 'Exemple de récupération des données avant traitement et envoi vers ClickUp.' },
                    { src: '../projet-stage/synchronisation/Toute-fonctionnalités_cu-vers-Out.png', alt: 'Fonctionnalités ClickUp vers Outlook', caption: 'Vue d’ensemble des fonctionnalités de synchronisation de ClickUp vers Outlook.' },
                    { src: '../projet-stage/synchronisation/correction-des-éléments.png', alt: 'Correction des éléments', caption: 'Correction des éléments pour fiabiliser les échanges entre les deux logiciels.' },
                    { src: '../projet-stage/synchronisation/Outlook-vers-cu-v2.png', alt: 'Outlook vers ClickUp v2', caption: 'Version améliorée de la synchronisation d’Outlook vers ClickUp.' },
                    { src: '../projet-stage/synchronisation/réussite-test.png', alt: 'Réussite du test', caption: 'Validation finale du fonctionnement attendu lors des tests.' },
                    { src: '../projet-stage/synchronisation/Réception-mail.png', alt: 'Réception du mail', caption: 'Réception du mail confirmant le bon déroulement de la synchronisation.' }
                ]
            },
            {
                name: 'Préparation de téléphones',
                description: 'Préparation de téléphones pour le client AMEL, chantier naval.',
                images: [
                    { src: '../projet-stage/téléphones/liste-prépa.png', alt: 'Liste de préparation', caption: 'Liste de préparation utilisée pour organiser les téléphones à configurer.' },
                    { src: '../projet-stage/téléphones/liste-tel.png', alt: 'Liste des téléphones', caption: 'Inventaire des téléphones à traiter pour la préparation initiale.' },
                    { src: '../projet-stage/téléphones/dashboard-full-tel.png', alt: 'Dashboard complet', caption: 'Tableau de bord complet pour suivre l’avancement de la préparation.' },
                    { src: '../projet-stage/téléphones/exemple-prépa.png', alt: 'Exemple de préparation', caption: 'Exemple d’une préparation terminée avec les contrôles effectués.' },
                    { src: '../projet-stage/téléphones/excel-info.png', alt: 'Informations Excel', caption: 'Fichier Excel regroupant les informations utiles pour chaque appareil.' }
                ]
            },
            {
                name: 'Installation d\'un VPN site à site',
                description: 'Dans le besoin d’accéder à des ressources à distance, un VPN de site à site est la solution.',
                images: [
                    { src: '../projet-stage/VPN/sophos-fw.jpg', alt: 'Pare-feu Sophos', caption: 'Mise en place du pare-feu Sophos pour sécuriser le tunnel site à site.' },
                    { src: '../projet-stage/VPN/test-vpn.jpg', alt: 'Test du VPN', caption: 'Test de fonctionnement pour vérifier la connexion entre les deux sites.' },
                    { src: '../projet-stage/VPN/install-sophos.jpg', alt: 'Installation Sophos', caption: 'Installation et configuration initiale de la solution Sophos.' }
                ]
            },
            {
                name: 'Préparation de VLAN',
                description: 'Un nouveau switch a été reçu et des VLAN devaient être configurés.',
                images: [
                    { src: '../projet-stage/VLAN/switch.jpg', alt: 'Switch', caption: 'Nouveau switch déballé et prêt pour la configuration.' },
                    { src: '../projet-stage/VLAN/Plan-vlan.jpg', alt: 'Plan des VLAN', caption: 'Plan de configuration des différents VLAN demandés.' },
                    { src: '../projet-stage/VLAN/trouver-adresse-switch.jpg', alt: 'Recherche de l’adresse du switch', caption: 'Recherche de l’adresse IP du switch attribuée en DHCP.' },
                    { src: '../projet-stage/VLAN/config-du-vlan.jpg', alt: 'Configuration des VLAN', caption: 'Affectation des ports aux différents VLAN selon le plan prévu.' },
                    { src: '../projet-stage/VLAN/test-connectic.jpg', alt: 'Test de connectivité', caption: 'Test de communication entre deux machines placées dans le même VLAN.' }
                ]
            }
        ]
    },
    developpement: {
        title: 'Organiser son développement professionnel',
        description: 'Formation continue et développement des compétences',
        projects: []
    }
};

// Variable pour tracker l'index actuel des images
let currentGalleryName = '';
let currentProjectIndex = null;
let currentImageIndex = 0;

// Variable pour la calculatrice de démonstration
let calculatorInitialized = false;

// ===== OUVERTURE MODAL GALERIE AVEC NAVIGATION ===== 
function openGalleryModal(galleryName) {
    const modal = document.getElementById('galleryModal');
    
    if (!modal || !galleriesData[galleryName]) return;
    
    currentGalleryName = galleryName;
    currentProjectIndex = null;
    currentImageIndex = 0;
    
    showProjectSelection();
    
    // Afficher la modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== AFFICHAGE SÉLECTION DE PROJETS =====
function showProjectSelection() {
    const gallery = galleriesData[currentGalleryName];
    const titleEl = document.getElementById('galleryTitle');
    const descriptionEl = document.getElementById('galleryDescription');
    
    titleEl.textContent = gallery.title;
    descriptionEl.textContent = gallery.description;
    
    // Masquer la visionneuse d'images, les indicateurs et la présentation
    const viewer = document.querySelector('.gallery-viewer');
    const indicators = document.getElementById('galleryIndicators');
    const presentation = document.getElementById('projectPresentation');
    const backBtn = document.querySelector('.back-gallery-modal');
    
    viewer.style.display = 'none';
    indicators.style.display = 'none';
    if (presentation) presentation.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';
    
    // Créer ou récupérer la grille de projets
    let projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) {
        projectGrid = document.createElement('div');
        projectGrid.id = 'projectGrid';
        projectGrid.className = 'project-grid';
        document.querySelector('.gallery-modal-content').appendChild(projectGrid);
    }
    
    projectGrid.style.display = 'grid';
    projectGrid.innerHTML = '';
    
    gallery.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        card.onclick = () => selectProject(index);
        projectGrid.appendChild(card);
    });
}

// ===== SÉLECTION D'UN PROJET =====
function selectProject(index) {
    currentProjectIndex = index;
    showProjectImages();
}

// ===== AFFICHAGE DES IMAGES DU PROJET =====
function showProjectImages() {
    const gallery = galleriesData[currentGalleryName];
    const project = gallery.projects[currentProjectIndex];
    const titleEl = document.getElementById('galleryTitle');
    const descriptionEl = document.getElementById('galleryDescription');
    
    titleEl.textContent = project.name;
    descriptionEl.textContent = project.description;
    
    // Masquer la grille de projets, afficher la présentation verticale
    const projectGrid = document.getElementById('projectGrid');
    const viewer = document.querySelector('.gallery-viewer');
    const indicators = document.getElementById('galleryIndicators');
    const backBtn = document.querySelector('.back-gallery-modal');
    
    if (projectGrid) projectGrid.style.display = 'none';
    viewer.style.display = 'none';
    indicators.style.display = 'none';
    if (backBtn) backBtn.style.display = 'block';
    
    // Créer ou récupérer la présentation verticale
    let presentation = document.getElementById('projectPresentation');
    if (!presentation) {
        presentation = document.createElement('div');
        presentation.id = 'projectPresentation';
        presentation.className = 'project-presentation';
        document.querySelector('.gallery-modal-content').appendChild(presentation);
    }
    
    presentation.style.display = 'block';
    presentation.innerHTML = '';
    
    project.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'presentation-slide';
        
        slide.innerHTML = `
            <div class="presentation-meta">
                <span class="presentation-label">Étape ${index + 1}</span>
                <h3>${image.alt}</h3>
            </div>
            <img src="${image.src}" alt="${image.alt}" class="presentation-image">
            <p class="presentation-description">${image.caption || image.alt}</p>
        `;
        
        presentation.appendChild(slide);
    });
}

// ===== RETOUR À LA SÉLECTION DE PROJETS =====
function backToProjects() {
    currentProjectIndex = null;
    showProjectSelection();
}

// ===== FERMETURE MODAL GALERIE ===== 
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset states
        currentGalleryName = '';
        currentProjectIndex = null;
        currentImageIndex = 0;
        
        // Masquer tous les éléments
        const projectGrid = document.getElementById('projectGrid');
        const presentation = document.getElementById('projectPresentation');
        if (projectGrid) projectGrid.style.display = 'none';
        if (presentation) presentation.style.display = 'none';
    }
}

// ===== NAVIGATION GALERIE ===== 
function nextImage() {
    const gallery = galleriesData[currentGalleryName];
    const project = gallery.projects[currentProjectIndex];
    if (!project) return;
    
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateGalleryImage();
}

function prevImage() {
    const gallery = galleriesData[currentGalleryName];
    const project = gallery.projects[currentProjectIndex];
    if (!project) return;
    
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateGalleryImage();
}

function goToImage(index) {
    currentImageIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const gallery = galleriesData[currentGalleryName];
    const project = gallery.projects[currentProjectIndex];
    if (!project) return;
    
    const imageEl = document.getElementById('galleryImage');
    const imgObj = project.images[currentImageIndex];
    imageEl.src = imgObj.src;
    imageEl.alt = imgObj.alt || '';

    // Appliquer une classe pour corriger l'orientation si nécessaire
    if (imgObj.rotate) {
        imageEl.classList.add('rotate-correct');
    } else {
        imageEl.classList.remove('rotate-correct');
    }
    
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

// ===== MODAL PDF =====
function openPdfModal(pdfUrl, title = 'Document') {
    const modal = document.getElementById('pdfModal');
    const titleEl = document.getElementById('pdfModalTitle');
    const viewer = document.getElementById('pdfViewer');

    if (!modal || !titleEl || !viewer) return;

    titleEl.textContent = title;
    viewer.src = pdfUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');

    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (viewer) {
        viewer.src = '';
    }
}

// Fermer les modals en cliquant en dehors
document.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('galleryModal');
    const pdfModal = document.getElementById('pdfModal');
    const calculatorModal = document.getElementById('calculatorModal');

    if (galleryModal && event.target === galleryModal) {
        closeGalleryModal();
    }

    if (pdfModal && event.target === pdfModal) {
        closePdfModal();
    }

    if (calculatorModal && event.target === calculatorModal) {
        closeCalculatorDemo();
    }
});

// Fermer les modals avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
        closePdfModal();
        closeCalculatorDemo();
    }
});

// ===== CALCULATRICE (DÉMO) =====
const calculatorState = {
    mode: null,
    step: null,
    data: {},
};

function appendToTerminal(text, className = '') {
    const terminal = document.getElementById('calculatorTerminal');
    if (!terminal) return;

    const line = document.createElement('div');
    line.textContent = text;
    if (className) {
        line.classList.add(className);
    }

    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

function resetCalculatorCLI() {
    calculatorState.mode = null;
    calculatorState.step = 'chooseMode';
    calculatorState.data = {};

    const terminal = document.getElementById('calculatorTerminal');
    const input = document.getElementById('calculatorInput');
    if (terminal) terminal.innerHTML = '';

    appendToTerminal('=== Calculatrice CLI (démo) ===');
    appendToTerminal('Options : C (calcul), E (équation), S (suite), D (dérivée), DIV (diviseur)');
    appendToTerminal('Tapez Q pour quitter.');
    appendToTerminal('---');
    appendToTerminal('ℹ️  Projet en cours de développement');
    appendToTerminal('---');
    appendToTerminal('Entrez une option :');

    if (input) {
        input.value = '';
        input.focus();
    }
}

function closeCalculatorDemo() {
    const modal = document.getElementById('calculatorModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openCalculatorDemo() {
    const modal = document.getElementById('calculatorModal');
    if (!modal) return;

    resetCalculatorCLI();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showCalculatorHelp() {
    appendToTerminal('');
    appendToTerminal('===== AIDE - COMMANDES DISPONIBLES =====');
    appendToTerminal('');
    appendToTerminal('C  → Calcul standard');
    appendToTerminal('      Opérateurs : +, -, *, /, **, R (reste)');
    appendToTerminal('      Entrez = pour obtenir le résultat final');
    appendToTerminal('');
    appendToTerminal('E  → Équation');
    appendToTerminal('      Option 1 : premier degré (ax + b = 0)');
    appendToTerminal('      Option 2 : second degré (ax² + bx + c = 0)');
    appendToTerminal('');
    appendToTerminal('S  → Suite');
    appendToTerminal('      Option 1 : suite arithmétique');
    appendToTerminal('      Option 2 : suite géométrique');
    appendToTerminal('');
    appendToTerminal('DIV → Diviseur & PGCD');
    appendToTerminal('      Calcule le PGCD et les diviseurs communs');
    appendToTerminal('');
    appendToTerminal('D  → Dérivée');
    appendToTerminal('      Formats : ax^n, ax, ou constante');
    appendToTerminal('');
    appendToTerminal('M  → Menu principal (depuis n\'importe quel moment)');
    appendToTerminal('Q  → Quitter la démo');
    appendToTerminal('');
    appendToTerminal('=====================================');
    appendToTerminal('');
}

function parseNumber(input) {
    const value = input.replace(',', '.');
    const num = parseFloat(value);
    return Number.isNaN(num) ? null : num;
}

function handleCalculatorInput(rawInput) {
    const input = rawInput.trim();
    if (!input) return;

    appendToTerminal('> ' + input, 'user-input');

    const lower = input.toLowerCase();
    if (lower === 'q' || lower === 'quit' || lower === 'exit') {
        appendToTerminal('Fermeture de la démo.');
        closeCalculatorDemo();
        return;
    }

    if (lower === 'm' || lower === 'menu') {
        appendToTerminal('Retour au menu principal.');
        resetCalculatorCLI();
        return;
    }

    if (calculatorState.step === 'chooseMode') {
        const mode = input.toUpperCase();
        calculatorState.mode = mode;

        switch (mode) {
            case 'C':
                calculatorState.step = 'askFirstNumber';
                appendToTerminal('Mode calcul standard (C).');
                appendToTerminal('Entrez le premier nombre :');
                break;
            case 'E':
                calculatorState.step = 'chooseEquationType';
                appendToTerminal('Mode équation (E).');
                appendToTerminal('Choisissez le type : 1 = premier degré, 2 = second degré');
                break;
            case 'S':
                calculatorState.step = 'chooseSuiteType';
                appendToTerminal('Mode suite (S).');
                appendToTerminal('Choisissez le type : 1 = arithmétique, 2 = géométrique');
                break;
            case 'D':
                calculatorState.step = 'askDerivative';
                appendToTerminal('Mode dérivée (D) - Formes simplifiées.');
                appendToTerminal('Formats acceptés : ax^n, ax, c');
                appendToTerminal('Exemples : 3x^2, 2x, 5');
                appendToTerminal('Entrez une expression :');
                break;
            case 'DIV':
                calculatorState.step = 'askDivFirstNumber';
                appendToTerminal('Mode DIV (PGCD / diviseurs).');
                appendToTerminal('Entrez le premier entier :');
                break;
            default:
                appendToTerminal('Option invalide. Réessayez (C, E, S, D, DIV).');
                break;
        }

        return;
    }

    // Mode : C (calcul standard)
    if (calculatorState.mode === 'C') {
        const data = calculatorState.data;

        if (calculatorState.step === 'askFirstNumber') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez un nombre valide :');
                return;
            }
            data.a = num;
            calculatorState.step = 'askSecondNumber';
            appendToTerminal('Entrez le deuxième nombre :');
            return;
        }

        if (calculatorState.step === 'askSecondNumber') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez un nombre valide :');
                return;
            }
            data.b = num;
            calculatorState.step = 'askOperator';
            appendToTerminal('Entrez un opérateur (+, -, *, /, **, R) ou = pour afficher le résultat :');
            return;
        }

        if (calculatorState.step === 'askOperator') {
            const op = input;
            if (op === '=') {
                // Initialiser le résultat si c'est la première opération
                if (calculatorState.data.result === undefined) {
                    const a = calculatorState.data.a;
                    const b = calculatorState.data.b;
                    const firstOp = calculatorState.data.pendingFirstOp;
                    
                    if (firstOp === '+') calculatorState.data.result = a + b;
                    else if (firstOp === '-') calculatorState.data.result = a - b;
                    else if (firstOp === '*') calculatorState.data.result = a * b;
                    else if (firstOp === '/') calculatorState.data.result = a / b;
                    else if (firstOp === '**') calculatorState.data.result = Math.pow(a, b);
                    else if (firstOp === 'R') calculatorState.data.result = a % b;
                }
                
                appendToTerminal('Résultat : ' + (calculatorState.data.result ?? '0'));
                appendToTerminal('Entrez un opérateur (+, -, *, /, **, R) ou = pour nouveau résultat :');
                return;
            }

            if (!['+', '-', '*', '/', '**', 'R'].includes(op)) {
                appendToTerminal('Opérateur non reconnu. Utilisez +, -, *, /, **, R ou =.');
                return;
            }

            data.currentOperator = op;
            data.pendingFirstOp = op;

            // première opération
            if (data.result === undefined) {
                const a = data.a;
                const b = data.b;

                if (op === '+') data.result = a + b;
                else if (op === '-') data.result = a - b;
                else if (op === '*') data.result = a * b;
                else if (op === '/') {
                    data.result = a / b;
                    const entier = Math.trunc(a / b);
                    const reste = a % b;
                    appendToTerminal(`Division flottante : ${data.result}, entier : ${entier}, reste : ${reste}`);
                } else if (op === '**') data.result = Math.pow(a, b);
                else if (op === 'R') data.result = a % b;

                if (op !== '/') appendToTerminal('Résultat : ' + data.result);
            }

            calculatorState.step = 'askNextNumber';
            appendToTerminal('Entrez un nombre (ou = pour obtenir le résultat) :');
            return;
        }

        if (calculatorState.step === 'askNextNumber') {
            if (input === '=') {
                appendToTerminal('Résultat : ' + (data.result ?? '0'));
                appendToTerminal('Entrez un opérateur (+, -, *, /, **, R) ou = :');
                calculatorState.step = 'askOperator';
                return;
            }

            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez un nombre valide :');
                return;
            }

            const op = data.currentOperator;
            if (op === '+') data.result += num;
            else if (op === '-') data.result -= num;
            else if (op === '*') data.result *= num;
            else if (op === '/') data.result /= num;
            else if (op === '**') data.result = Math.pow(data.result, num);
            else if (op === 'R') data.result = data.result % num;

            appendToTerminal('Résultat : ' + data.result);
            calculatorState.step = 'askOperator';
            appendToTerminal('Entrez un opérateur (+, -, *, /, **, R) ou = :');
            return;
        }

        if (calculatorState.step === 'done') {
            const cmd = input.toLowerCase();
            if (cmd === 'm' || cmd === 'menu') {
                resetCalculatorCLI();
                return;
            }
            appendToTerminal('Tapez M pour retourner au menu ou Q pour quitter.');
            return;
        }

        return;
    }

    // Mode : E (équation)
    if (calculatorState.mode === 'E') {
        const data = calculatorState.data;

        if (calculatorState.step === 'chooseEquationType') {
            if (input !== '1' && input !== '2') {
                appendToTerminal('Veuillez entrer 1 ou 2.');
                return;
            }

            data.equationType = input;
            if (input === '1') {
                calculatorState.step = 'askA';
                appendToTerminal('Équation 1er degré (ax + b = 0). Entrez a :');
            } else {
                calculatorState.step = 'askA';
                appendToTerminal('Équation 2nd degré (ax² + bx + c = 0). Entrez a :');
            }
            return;
        }

        if (calculatorState.step === 'askA') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez la valeur de a :');
                return;
            }
            data.a = num;
            calculatorState.step = 'askB';
            appendToTerminal('Entrez la valeur de b :');
            return;
        }

        if (calculatorState.step === 'askB') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez la valeur de b :');
                return;
            }
            data.b = num;

            if (data.equationType === '1') {
                if (data.a === 0 && data.b === 0) {
                    appendToTerminal('Infinité de solutions.');
                } else {
                    const x = -data.b / data.a;
                    appendToTerminal('Solution : x = ' + x);
                }
                appendToTerminal('Tapez M pour menu ou Q pour quitter.');
                calculatorState.step = 'done';
                return;
            }

            calculatorState.step = 'askC';
            appendToTerminal('Entrez la valeur de c :');
            return;
        }

        if (calculatorState.step === 'askC') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez la valeur de c :');
                return;
            }
            data.c = num;

            const delta = data.b * data.b - 4 * data.a * data.c;
            if (delta > 0) {
                const r1 = (-data.b - Math.sqrt(delta)) / (2 * data.a);
                const r2 = (-data.b + Math.sqrt(delta)) / (2 * data.a);
                appendToTerminal(`Solutions : ${r1} et ${r2}`);
            } else if (delta === 0) {
                const r = -data.b / (2 * data.a);
                appendToTerminal(`Solution unique : ${r}`);
            } else {
                appendToTerminal('Pas de solution réelle.');
            }

            appendToTerminal('Tapez M pour menu ou Q pour quitter.');
            calculatorState.step = 'done';
            return;
        }

        if (calculatorState.step === 'done') {
            const cmd = input.toLowerCase();
            if (cmd === 'm' || cmd === 'menu') {
                resetCalculatorCLI();
                return;
            }
            appendToTerminal('Tapez M pour retourner au menu ou Q pour quitter.');
            return;
        }

        return;
    }

    // Mode : S (suite)
    if (calculatorState.mode === 'S') {
        const data = calculatorState.data;

        if (calculatorState.step === 'chooseSuiteType') {
            if (input !== '1' && input !== '2') {
                appendToTerminal('Veuillez entrer 1 ou 2.');
                return;
            }

            data.suiteType = input;
            calculatorState.step = 'askFirstTerm';
            appendToTerminal('Entrez le premier terme :');
            return;
        }

        if (calculatorState.step === 'askFirstTerm') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez le premier terme :');
                return;
            }
            data.firstTerm = num;
            calculatorState.step = 'askReason';
            appendToTerminal('Entrez la raison :');
            return;
        }

        if (calculatorState.step === 'askReason') {
            const num = parseNumber(input);
            if (num === null) {
                appendToTerminal('Nombre non valide. Entrez la raison :');
                return;
            }
            data.reason = num;
            calculatorState.step = 'askCount';
            appendToTerminal('Entrez le nombre de termes :');
            return;
        }

        if (calculatorState.step === 'askCount') {
            const count = parseInt(input, 10);
            if (Number.isNaN(count) || count <= 0) {
                appendToTerminal('Veuillez entrer un entier positif.');
                return;
            }

            const terms = [];
            const a1 = data.firstTerm;
            const r = data.reason;

            if (data.suiteType === '1') {
                for (let i = 0; i < count; i++) {
                    terms.push(a1 + i * r);
                }
            } else {
                for (let i = 0; i < count; i++) {
                    terms.push(a1 * Math.pow(r, i));
                }
            }

            appendToTerminal('Suite générée :');
            appendToTerminal(terms.join(', '));
            appendToTerminal('Tapez M pour menu ou Q pour quitter.');
            calculatorState.step = 'done';
            return;
        }

        if (calculatorState.step === 'done') {
            const cmd = input.toLowerCase();
            if (cmd === 'm' || cmd === 'menu') {
                resetCalculatorCLI();
                return;
            }
            appendToTerminal('Tapez M pour retourner au menu ou Q pour quitter.');
            return;
        }

        return;
    }

    // Mode : DIV (PGCD / diviseurs)
    if (calculatorState.mode === 'DIV') {
        const data = calculatorState.data;

        if (calculatorState.step === 'askDivFirstNumber') {
            const num = parseInt(input, 10);
            if (Number.isNaN(num)) {
                appendToTerminal('Entier non valide. Entrez un entier :');
                return;
            }
            data.a = Math.abs(num);
            calculatorState.step = 'askDivSecondNumber';
            appendToTerminal('Entrez le deuxième entier :');
            return;
        }

        if (calculatorState.step === 'askDivSecondNumber') {
            const num = parseInt(input, 10);
            if (Number.isNaN(num)) {
                appendToTerminal('Entier non valide. Entrez un entier :');
                return;
            }
            data.b = Math.abs(num);

            const a = data.a;
            const b = data.b;

            const gcd = (x, y) => {
                while (y !== 0) {
                    const t = y;
                    y = x % y;
                    x = t;
                }
                return Math.abs(x);
            };

            const pgcd = gcd(a, b);
            const divisors = [];
            for (let i = 1; i <= Math.max(a, b); i++) {
                if (a % i === 0 && b % i === 0) divisors.push(i);
            }

            appendToTerminal(`PGCD(${a}, ${b}) = ${pgcd}`);
            appendToTerminal('Diviseurs communs : ' + divisors.join(', '));
            appendToTerminal('Tapez M pour menu ou Q pour quitter.');
            calculatorState.step = 'done';
            return;
        }

        if (calculatorState.step === 'done') {
            const cmd = input.toLowerCase();
            if (cmd === 'm' || cmd === 'menu') {
                resetCalculatorCLI();
                return;
            }
            appendToTerminal('Tapez M pour retourner au menu ou Q pour quitter.');
            return;
        }

        return;
    }

    // Mode : D (dérivée simplifiée)
    if (calculatorState.mode === 'D') {
        const data = calculatorState.data;

        if (calculatorState.step === 'askDerivative') {
            const expr = input.trim().toLowerCase();
            
            // Parser l'expression : ax^n, ax, ou c
            let a = 1, n = 0;
            let isConstant = false;

            if (expr.includes('x')) {
                // Format : ax^n ou ax
                if (expr.includes('^')) {
                    // ax^n
                    const match = expr.match(/^([+-]?\d*\.?\d+)?\s*x\s*\^\s*([+-]?\d+\.?\d*)$/);
                    if (match) {
                        a = match[1] ? parseFloat(match[1]) : 1;
                        n = parseFloat(match[2]);
                    } else {
                        appendToTerminal('Format non reconnu. Utilisez : ax^n (ex: 3x^2)');
                        return;
                    }
                } else {
                    // ax (équivalent à ax^1)
                    const match = expr.match(/^([+-]?\d*\.?\d+)?\s*x$/);
                    if (match) {
                        a = match[1] ? parseFloat(match[1]) : 1;
                        n = 1;
                    } else {
                        appendToTerminal('Format non reconnu. Utilisez : ax (ex: 2x)');
                        return;
                    }
                }
            } else {
                // Constante
                const num = parseNumber(expr);
                if (num === null) {
                    appendToTerminal('Nombre non valide. Entrez une constante ou une expression ax^n');
                    return;
                }
                a = num;
                n = 0;
                isConstant = true;
            }

            if (isConstant) {
                appendToTerminal(`f(x) = ${a}`);
                appendToTerminal("Dérivée : f'(x) = 0 (dérivée d'une constante)");
            } else if (n === 0) {
                appendToTerminal(`f(x) = ${a}`);
                appendToTerminal("Dérivée : f'(x) = 0");
            } else if (n === 1) {
                appendToTerminal(`f(x) = ${a}x`);
                appendToTerminal(`Dérivée : f'(x) = ${a}`);
            } else {
                const newA = a * n;
                const newN = n - 1;
                appendToTerminal(`f(x) = ${a}x^${n}`);
                if (newN === 0) {
                    appendToTerminal(`Dérivée : f'(x) = ${newA}`);
                } else if (newN === 1) {
                    appendToTerminal(`Dérivée : f'(x) = ${newA}x`);
                } else {
                    appendToTerminal(`Dérivée : f'(x) = ${newA}x^${newN}`);
                }
            }

            appendToTerminal('Tapez M pour menu ou Q pour quitter.');
            calculatorState.step = 'done';
            return;
        }

        if (calculatorState.step === 'done') {
            const cmd = input.toLowerCase();
            if (cmd === 'm' || cmd === 'menu') {
                resetCalculatorCLI();
                return;
            }
            appendToTerminal('Tapez M pour retourner au menu ou Q pour quitter.');
            return;
        }

        return;
    }

    // Fallback
    appendToTerminal('Commande non reconnue. Tapez Q pour quitter ou M pour menu.');
}

function setupCalculator() {
    if (calculatorInitialized) return;
    calculatorInitialized = true;

    const form = document.getElementById('calculatorForm');
    const input = document.getElementById('calculatorInput');

    if (!form || !input) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const value = input.value;
        handleCalculatorInput(value);
        input.value = '';
    });

    resetCalculatorCLI();
}

// Initial setup for the calculator demo (attaches handlers)
setupCalculator();

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

