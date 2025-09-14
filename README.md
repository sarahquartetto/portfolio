## Portfolio — Sarah Quartetto

Site personnel pour présenter mes projets de développement web.

### Démarrage

```bash
npm install
npm run dev
```

### Scripts

- `npm run dev`: lance le serveur de développement
- `npm run build`: build de production
- `npm run preview`: prévisualisation du build

### Structure

- `src/pages`: Home, Projects, About, Contact
- `src/components`: Header, Footer, ProjectCard, ThemeToggle
- `src/projectData.js`: données d’exemple des projets

### Déploiement

- Vercel: connecter le repo et définir la commande de build `npm run build` et le dossier `dist`
- Netlify: même configuration

### Personnalisation

- Modifier le nom dans `Header.jsx`
- Remplacer `src/projectData.js` avec vos vrais projets
- Mettre à jour les couleurs dans `src/index.css`
