# Portfolio Robin BARBAT-PATINAUD

Un portfolio moderne, épuré et professionnel créé avec HTML, CSS et JavaScript vanilla.

## 🎨 Design et Esthétique

- **Couleurs douces et modernes** : Violet (#6c5ce7), Orange (#e17055), Gris clair (#f0f0f0)
- **Style épuré** : Design minimaliste avec beaucoup d'espace blanc
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations fluides** : Transitions et effets subtils pour une meilleure UX

## 📁 Structure du Projet

```
portfolio/
├── index.html           # Page d'accueil principale
├── styles.css           # Feuille de styles principale
├── script.js            # Interactions JavaScript
├── pages/
│   ├── portfolio.html    # Page des projets avec galerie
│   ├── competences.html  # Compétences techniques (hard skills)
│   ├── fichiers.html     # Téléchargement CV, lettres, certifications
│   ├── contact.html      # Coordonnées de contact
│   ├── about.html        # À propos de moi
│   └── passion.html      # Pourquoi l'informatique
├── assets/
│   ├── files/            # CV, lettres, certifications (PDFs)
│   │   ├── CV_RobinBARBAT-PATINAUD.pdf
│   │   ├── LettreMotivation.pdf
│   │   ├── Certifications.pdf
│   │   ├── AttestationStage.pdf
│   │   ├── RapportStage.pdf
│   │   └── Portfolio.pdf
│   └── images/           # Images des projets
│       ├── web1.jpg, web2.jpg, web3.jpg
│       ├── mobile1.jpg, mobile2.jpg
│       ├── backend1.jpg, backend2.jpg
│       ├── design1.jpg
│       ├── outils1.jpg
│       └── autres1.jpg
└── README.md
```

## 🌐 Pages et Fonctionnalités

### 1. **Accueil (index.html)**
- Section Hero avec titre et CTA
- 4 cartes principales :
  - À propos de moi
  - Mes projets
  - Mes études
  - Pourquoi l'informatique

### 2. **Portfolio (pages/portfolio.html)**
- Tableau cliquable de 6 compétences principales
- Galeries d'images associées qui s'affichent au clic
- Modal pour voir les images en grand
- Catégories :
  - Développement Web
  - Applications Mobile
  - Backend & Bases de Données
  - UI/UX Design
  - Outils & DevOps
  - Autres Projets

### 3. **Compétences (pages/competences.html)**
- Liste détaillée des hard skills
- 8 catégories :
  - Frontend (HTML, CSS, JavaScript, React, Vue...)
  - Backend (PHP, Node.js, Python...)
  - Bases de Données (MySQL, PostgreSQL, MongoDB...)
  - Développement Mobile (Android, React Native, Flutter...)
  - Outils & DevOps (Git, Docker, Linux...)
  - Langages de Programmation
  - Design & UX
  - Méthodologies (Agile, Scrum...)

### 4. **Fichiers (pages/fichiers.html)**
- 6 cartes téléchargeables :
  - CV
  - Lettre de motivation
  - Certifications
  - Attestation de stage
  - Rapport de stage
  - Portfolio PDF

### 5. **Contact (pages/contact.html)**
- 6 moyens de contact :
  - Email
  - Téléphone
  - Localisation
  - LinkedIn
  - GitHub
  - Site web

### 6. **À Propos (pages/about.html)**
- Section "Qui suis-je ?"
- Barres de progression des compétences
- Timeline du parcours académique

### 7. **Passion (pages/passion.html)**
- 6 raisons pourquoi l'informatique
- Vision future personnelle

## 🎯 Fonctionnalités JavaScript

1. **Navigation Active** : Highlight automatique du lien actif
2. **Galeries Cliquables** : Affichage/masquage de galeries d'images
3. **Modal d'Images** : Zoom sur les images avec fermeture au clic ou Échap
4. **Scroll Fluide** : Animation smooth scroll
5. **Animations au Scroll** : Éléments qui apparaissent avec animation
6. **Parallax** : Effet de parallax optionnel sur le hero

## 🎨 Variables CSS

```css
:root {
    --primary: #1a1a2e;      /* Bleu très foncé */
    --secondary: #f0f0f0;    /* Gris clair */
    --accent: #6c5ce7;       /* Violet doux */
    --accent-light: #a29bfe; /* Violet clair */
    --danger: #e17055;       /* Orange doux */
    --success: #00b894;      /* Vert doux */
    --border: #2d2d44;       /* Bordures */
    --shadow: rgba(0,0,0,0.15); /* Ombres */
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint principal : 768px
- Grilles CSS Grid et Flexbox adaptatives

## 🚀 Comment Utiliser

1. **Remplacer les informations personnelles** dans les fichiers HTML (nom, email, téléphone, etc.)
2. **Ajouter les fichiers** PDF dans `assets/files/`
3. **Ajouter les images** des projets dans `assets/images/`
4. **Mettre à jour les liens** de réseaux sociaux (LinkedIn, GitHub)
5. **Adapter le contenu** selon votre parcours et projets

## 💡 Conseils de Personnalisation

- Les couleurs peuvent être modifiées dans les variables CSS
- Les cartes peuvent être ajoutées/supprimées
- Les galeries peuvent être étendues avec plus d'images
- Le contenu textuel doit être adapté à votre profil

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styling moderne avec variables et gradients
- **JavaScript Vanilla** : Interactions sans frameworks
- **Responsive Design** : Mobile-friendly
- **CSS Grid & Flexbox** : Layouts modernes

## 📄 Fichiers à Préparer

Assurez-vous d'avoir :
- ✅ CV à jour (PDF)
- ✅ Lettre de motivation (PDF)
- ✅ Certifications/diplômes (PDF)
- ✅ Images des projets (JPG/PNG)
- ✅ Informations de contact valides

## 🎓 Notes BTS SIO

Ce portfolio est idéal pour :
- Présenter votre parcours SIO
- Montrer vos projets de stage
- Démontrer vos compétences techniques
- Faciliter votre insertion professionnelle

---

**Créé avec ❤️ pour le BTS SIO 2026**
