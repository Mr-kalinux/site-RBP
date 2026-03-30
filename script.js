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
                name: 'Réalisation de l\'inventaire du matériel informatique',
                description: 'Réalisation d\'un inventaire complet des équipements informatiques de l\'entreprise',
                images: [
                    { src: '../assets/images/patrimoine1.jpg', alt: 'Inventaire 1' },
                    { src: '../assets/images/patrimoine2.jpg', alt: 'Inventaire 2' }
                ]
            },
            {
                name: 'Changement de poste',
                description: 'Réalisation du déménagement et de la configuration des postes utilisateurs',
                images: [
                    { src: '../projet-stage/changement-poste/changement-poste-1.jpg', alt: 'Changement de poste 1', caption: 'Démontage et migration d\'un poste vers son nouvel emplacement.' },
                    { src: '../projet-stage/changement-poste/changement-poste-2.jpg', alt: 'Changement de poste 2', caption: 'Reconnexion, tests et validation de la nouvelle configuration.' }
                ]
            }
        ]
    },
    incidents: {
        title: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution',
        description: 'Support utilisateur et gestion des incidents informatiques',
        projects: [
            {
                name: 'Changement de poste',
                description: 'Réalisation du déménagement et de la configuration des postes utilisateurs',
                images: [
                    { src: '../projet-stage/changement-poste/changement-poste-1.jpg', alt: 'Changement de poste 1', caption: 'Démontage et migration d’un poste vers son nouvel emplacement.' },
                    { src: '../projet-stage/changement-poste/changement-poste-2.jpg', alt: 'Changement de poste 2', caption: 'Reconnexion, tests et validation de la nouvelle configuration.' }
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
                name: 'Préparation de poste pour client',
                description: 'Préparation complète de postes de travail avec installation automatisée',
                images: [
                    { src: '../projet-stage/Préparation-postes/pc-prépa.jpg', alt: 'pc-prépa', caption: 'installation du pc à préparer' },
                    { src: '../projet-stage/Préparation-postes/install-windows-neuf.jpg', alt: 'install-windows-neuf', caption: 'installation de Windows 11 pro à partir d\'une clé dédicacé avec un script pour passer les étapes d\'authentification' },
                    { src: '../projet-stage/Préparation-postes/script-execution.jpg', alt: 'script-execution', caption: 'une fois Windows installé le script continus pour installer une liste d\'application utile' },
                    { src: '../projet-stage/Préparation-postes/script-install.jpg', alt: 'script-install', caption: 'script PowerShell qui permet d\'automatiser l\'installation des applications' },
                    { src: '../projet-stage/Préparation-postes/maj-windows.jpg', alt: 'maj-windows', caption: 'faire toutes les mises à jours Windows pour que les pc soient sur les dernières versions' },
                    { src: '../projet-stage/Préparation-postes/maj-BIOS.jpg', alt: 'maj-BIOS', caption: 'faire les mises à jour du BIOS' },
                    { src: '../projet-stage/Préparation-postes/maj-driver.jpg', alt: 'maj-driver', caption: 'installer toutes les dernières versions des pilotes' }
                ]
            },
            {
                name: 'Test de connectivité',
                description: 'Contrôle de la qualité et de la disponibilité du réseau',
                images: [
                    { src: '../projet-stage/test-connectic/test-connectivite-1.jpg', alt: 'Test connectivité 1', caption: 'Utilisation de testeurs réseau pour valider les câbles et équipements.' },
                    { src: '../projet-stage/test-connectic/test-connectivite-2.jpg', alt: 'Test connectivité 2', caption: 'Validation de la connexion internet et du VLAN.' }
                ]
            },
            {
                name: 'Transfert de données',
                description: 'Migration sécurisée des données des anciens postes vers les nouveaux',
                images: [
                    { src: '../projet-stage/transfert-donnée/transfert-donnees-1.jpg', alt: 'Transfert données 1', caption: 'Configuration des sauvegardes et transfert initial via réseau local.' },
                    { src: '../projet-stage/transfert-donnée/transfert-donnees-2.jpg', alt: 'Transfert données 2', caption: 'Validation finale et vérification de l\'intégrité des fichiers.' }
                ]
            }
        ]
    },
    presence: {
        title: 'Développer la présence en ligne de l\'organisation',
        description: 'Création et gestion de présence web et réseaux sociaux',
        projects: [
            {
                name: 'LinkedIn',
                description: 'Développement de la présence professionnelle sur LinkedIn',
                images: [
                    { src: '../assets/images/linkedin1.jpg', alt: 'LinkedIn 1' }
                ]
            },
            {
                name: 'Portfolio',
                description: 'Création et gestion d\'un portfolio en ligne',
                images: [
                    { src: '../assets/images/portfolio1.jpg', alt: 'Portfolio 1' }
                ]
            }
        ]
    },
    projet: {
        title: 'Travail en mode projet',
        description: 'Gestion de projets informatiques et collaboration d\'équipe',
        projects: [
            {
                name: 'Migration système',
                description: 'Migration vers un nouveau système d\'information',
                images: [
                    { src: '../assets/images/projet1.jpg', alt: 'Migration 1' },
                    { src: '../assets/images/projet2.jpg', alt: 'Migration 2' }
                ]
            },
            {
                name: 'Formation équipe',
                description: 'Formation des équipes aux nouvelles méthodologies',
                images: [
                    { src: '../assets/images/projet3.jpg', alt: 'Formation 1' }
                ]
            },
            {
                name: 'Hackathon Hack4Scaria (Airbus / Renault)',
                description: 'Participation au hackathon collaboratif pour développer des prototypes innovants',
                images: [
                    { src: '../assets/images/hackathon1.jpg', alt: 'Hackathon 1', caption: 'Atelier de conception avec les équipes Airbus et Renault.' },
                    { src: '../assets/images/hackathon2.jpg', alt: 'Hackathon 2', caption: 'Présentation finale du projet devant les jurys.' }
                ]
            },
            {
                name: 'CTF cybersécurité CESI La Rochelle',
                description: 'Épreuve de type capture the flag orientée cybersécurité',
                images: [
                    { src: '../assets/images/ctf1.jpg', alt: 'CTF 1', caption: 'Résolution de challenges réseau et exploitation.' },
                    { src: '../assets/images/ctf2.jpg', alt: 'CTF 2', caption: 'Équipe en session de débogage et analyse de vulnérabilités.' }
                ]
            }
        ]
    },
    service: {
        title: 'Mettre à disposition des utilisateurs un service informatique',
        description: 'Déploiement et administration de services informatiques',
        projects: [
            {
                name: 'Mise en place d\'un VPN',
                description: 'Configuration et déploiement d\'un VPN pour télétravail sécurisé',
                images: [
                    { src: '../projet-stage/VPN/vpn-setup-1.jpg', alt: 'VPN setup 1', caption: 'Déploiement des concentrateurs VPN et ouverture des ports nécessaires.' },
                    { src: '../projet-stage/VPN/vpn-setup-2.jpg', alt: 'VPN setup 2', caption: 'Tests de connexion utilisateur et vérification de la sécurité.' }
                ]
            },
            {
                name: 'configurer un switch avec plusieurs VLAN',
                description: 'configurer un switch avec plusieurs VLAN',
                images: [
                    { src: '../projet-stage/VLAN/switch.jpg', alt: 'switch', caption: 'photo du switch une fois déballé et branché' },
                    { src: '../projet-stage/VLAN/Plan-vlan.jpg', alt: 'plan-vlan', caption: 'configuration demandés par le client des différents VLAN' },
                    { src: '../projet-stage/VLAN/trouver-adresse-switch.jpg', alt: 'trouver-adresse-switch', caption: 'utiliser l\'outil Advanced ip scanner pour retrouver l\'adresse ip forunit en DHCP du switch' },
                    { src: '../projet-stage/VLAN/config-du-vlan.jpg', alt: 'config-du-vlan', caption: 'mapper tous les ports qui votn aux différents VLAN' },
                    { src: '../projet-stage/VLAN/test-connectic.jpg', alt: 'test-connectic', caption: 'test de connection entre deux machines présentes dans le même VLAN' }
                ]
            },
            {
                name: 'Mise en place d\'imprimantes',
                description: 'Installation et partage des imprimantes sur le réseau',
                images: [
                    { src: '../projet-stage/imprimante/imprimante-1.jpg', alt: 'Imprimante 1', caption: 'Installation physique et connexion réseau des imprimantes.' },
                    { src: '../projet-stage/imprimante/imprimante-2.jpg', alt: 'Imprimante 2', caption: 'Configuration des pilotes et tests d\'impression.' }
                ]
            }
        ]
    },
    developpement: {
        title: 'Organiser son développement professionnel',
        description: 'Formation continue et développement des compétences',
        projects: [
            {
                name: 'Plan de formation',
                description: 'Établissement d\'un plan de développement professionnel',
                images: [
                    { src: '../assets/images/dev1.jpg', alt: 'Formation 1' },
                    { src: '../assets/images/dev2.jpg', alt: 'Formation 2' }
                ]
            },
            {
                name: 'Certification technique',
                description: 'Obtention de certifications informatiques',
                images: [
                    { src: '../assets/images/dev3.jpg', alt: 'Certification 1' }
                ]
            }
        ]
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
    imageEl.src = project.images[currentImageIndex].src;
    imageEl.alt = project.images[currentImageIndex].alt;
    
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

