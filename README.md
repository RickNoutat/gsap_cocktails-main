# Mojito Bar — Site Web de Cocktails Animé

![React 19](https://img.shields.io/badge/-React_19-blue?style=for-the-badge&logo=react&logoColor=white)
![GSAP 3](https://img.shields.io/badge/-GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/-Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Sommaire

1. [À propos](#à-propos)
2. [Stack technique](#stack-technique)
3. [Fonctionnalités](#fonctionnalités)
4. [Démarrage rapide](#démarrage-rapide)

## À propos

Un projet perso que j'ai construit pour pousser mes compétences avec GSAP et le design d'interfaces pilotées par le scroll.

Le concept : une landing page pour un bar à cocktails haut de gamme — **Mojito Bar, Paris** — pensée pour être cinématique dès le premier coup de molette. Chaque section a son animation propre : révélation des textes caractère par caractère, vidéo qui avance image par image au scroll, profondeur parallaxe sur les éléments décoratifs, et un carousel entièrement fait à la main sans aucune librairie externe.

L'objectif était de construire quelque chose qui se sent premium, tout en gardant un code propre et bien structuré en composants.

## Stack technique

- **[React 19](https://react.dev/)** — architecture en composants avec le hook `useGSAP` pour gérer le cycle de vie des animations.

- **[GSAP 3](https://gsap.com/)** — moteur d'animation principal. Utilise `ScrollTrigger`, `SplitText`, les sections épinglées, les timelines parallaxe, la vidéo synchronisée au scroll et les transitions par masquage d'image.

- **[Tailwind CSS v4](https://tailwindcss.com/)** — stylisation utilitaire avec des tokens de thème personnalisés et des classes réutilisables pour le design system.

- **[Vite](https://vitejs.dev/)** — HMR instantané et builds rapides, indispensable pour itérer sur un projet aussi chargé en animations.

## Fonctionnalités

- **Révélations SplitText** — titres animés caractère par caractère avec effets de dégradé au chargement et à l'entrée dans le viewport
- **Vidéo synchronisée au scroll** — la vidéo hero avance image par image en fonction du scroll, sans lecture automatique
- **Sections épinglées** — contenu bloqué dans le viewport pendant que les timelines GSAP internes se déroulent entièrement
- **Timelines ScrollTrigger** — chaque section s'anime en fonction de sa position dans le scroll
- **Profondeur parallaxe** — feuilles et éléments d'arrière-plan qui se déplacent à des vitesses indépendantes
- **Masquage d'image** — transitions cinématiques entre les sections via CSS clip-path
- **Carousel personnalisé** — slider entièrement fait maison avec navigation par onglets et transitions animées, zéro dépendance
- **Responsive** — mise en page et animations qui s'adaptent du mobile au desktop

## Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### Cloner le dépôt

```bash
git clone https://github.com/rickydavinci/gsap-cocktails.git
cd gsap-cocktails
```

### Installer les dépendances

```bash
pnpm install
```

### Lancer en local

```bash
pnpm dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.
