
# Portfolio — Frontend

Petit site portfolio construit avec Vite + React + TypeScript et Tailwind CSS. C'est une version personnelle destinée à présenter des projets, expériences, certifications et compétences. Le projet contient déjà :

- un système de langue léger (FR / EN) via `src/contexts/LocaleContext.tsx` et `src/i18n.ts` ;
- une section Compétences (`src/components/sections/Skills.tsx`) affichant des barres de progression ;
- une navigation fixe simplifiée avec switch thème et switch langue (`src/components/layout/Navbar.tsx`) ;
- un formulaire de contact qui ouvre le client mail (mailto) vers l'adresse personnelle `cmtt1004@gmail.com` ;
- contenu stocké en fichiers JS/TS sous `src/data/` (projects, experiences, certifications, skills, contact).

Ce README explique comment démarrer le projet, la structure des fichiers, et les modifications courantes.

## Prérequis

- Node.js 18+ (ou 16+, vérifier compatibilité). Testé sur Windows — PowerShell est utilisé dans les exemples.
- npm (ou yarn/pnpm) — les scripts ci-dessous utilisent `npm`.

## Installer et lancer (développement)

Ouvrez PowerShell dans le dossier `project` et exécutez :

```powershell
# installer les dépendances
npm install

# lancer le serveur de développement (Vite)
npm run dev
```

Ensuite ouvrez l'URL fournie par Vite (généralement http://localhost:5173).

## Scripts utiles

- `npm run dev` — démarre Vite en mode développement.
- `npm run build` — compile pour la production (dossier `dist`).
- `npm run preview` — prévisualise le build de production localement.
- `npm run lint` — lance ESLint (configuration du projet).
- `npm run typecheck` — vérifie les types TypeScript (ne produit pas d'artefacts).

## Structure du projet (principaux fichiers)

```
project/
├─ src/
│  ├─ App.tsx                 # point d'entrée React
│  ├─ main.tsx
│  ├─ index.css               # Tailwind + styles globaux
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navbar.tsx        # header simplifié (logo CMTT, theme + langue)
│  │  │  └─ Footer.tsx
│  │  └─ sections/
│  │     ├─ Hero.tsx
│  │     ├─ About.tsx
│  │     ├─ Skills.tsx        # section compétences (barres)
│  │     ├─ Projects.tsx
│  │     ├─ Experiences.tsx
│  │     ├─ Certifications.tsx
│  │     └─ Contact.tsx       # formulaire -> mailto: cmtt1004@gmail.com
│  ├─ contexts/
│  │  ├─ ProfileContext.tsx   # thème / profil
│  │  └─ LocaleContext.tsx    # FR/EN simple
│  ├─ data/                   # contenus (projects, experiences, skills, ...)
│  ├─ i18n.ts                  # traductions FR / EN
│  └─ utils/
│     └─ profileConfig.ts
```

## Personnalisation rapide

- Modifier l'adresse de contact : `src/components/sections/Contact.tsx` (mailto utilisé actuellement).
- Mettre à jour les expériences / projets / compétences : fichiers sous `src/data/`.
- Traductions : `src/i18n.ts`. La fonction helper `t(key)` est exposée par `useLocale()`.

## Bonnes pratiques & notes

- Tailwind est utilisé pour le style. Si vous modifiez `tailwind.config.js` pensez à relancer le serveur.
- Le mode sombre est géré via `ProfileContext` et appliqué aux sections (classes conditionnelles). Plusieurs composants lisent `isDarkMode`.
- Le switch de langue est volontairement léger — il ne persiste pas encore la sélection dans le localStorage (à ajouter si besoin).

## Débogage rapide

- Erreurs TypeScript : exécutez `npm run typecheck` pour lister les erreurs de typage.
- Erreurs ESLint : exécutez `npm run lint`.
- Si Vite ne démarre pas, supprimez `node_modules` puis relancez `npm install`.

## Prochaines améliorations possibles

- Persistance de la langue choisie (localStorage) ; affichage d'un toast quand le message est envoyé ;
- Remplacer `mailto:` par une API (Supabase, Netlify Functions, ou SMTP) pour envoyer directement les messages depuis le site ;
- Ajouter des tests unitaires (Jest / Vitest) et des tests d'intégration pour les composants principaux ;
- Déployer (Netlify / Vercel / GitHub Pages / Azure Static Web Apps) en configurant le build `npm run build`.

## Contribuer

1. Forkez le dépôt.
2. Créez une branche feature: `git checkout -b feat/ma-modif`.
3. Faites vos changements et assurez-vous que `npm run lint` et `npm run typecheck` passent.
4. Ouvrez une Pull Request.

Merci — si vous voulez que j'ajoute automatiquement la persistance de la langue ou que je connecte le formulaire à un backend, dites-moi et je m'en occupe.

