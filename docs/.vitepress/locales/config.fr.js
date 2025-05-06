export default {
  lang: 'fr',
  label: 'Français',
  dir: '/fr/',
  head: [],

  title: 'CGP',
  description: 'Un site de documentation pour la compilation, l\'exporation et le déploiment de projet Godot avec Codemagic.',
  
  themeConfig: {
    nav: [
      { text: 'Acceuil', link: '/fr/' },
      { text: 'Tutoriel', link: '/fr/getting-started' },
      { text: 'Modèles', link: '/fr/download-center' },
      { text: 'Journal', link: '/fr/changelog' },
    ],
    lastUpdated: "Dernière modification",
    editLink: {
      pattern: "https://github.com/sabinayo/codemagic-godot-pipeline/edit/main/docs/:path",
      text: "Modifier cette page sur GitHub",
    },
    darkModeSwitchLabel: "Apparence",
    darkModeSwitchTitle: "Permuter vers le mode sombre",
    langMenuLabel: "Changer la langue d'affichage",
    notFound: {
      title: "Page introuvable",
      quote: "Cette page n'existe pas ou n'est plus disponible. Mais ne vous inquiétez pas, vous êtes toujours sur la bonne voie. Essayez de revenir à l'accueil pour continuer votre navigation.",
      linkLabel: "Retourner à l'acceuil",
      linkText: "Retourner à l'acceuil"
    },
    lightModeSwitchTitle: "Permuter vers le mode clair",
    returnToTopLabel: "Aller au début de la page",
    sidebarMenuLabel: "Menu",
    skipToContentLabel: "Aller au contenu",
    outline: {
      label: "Sur cette page"
    },
    docFooter: {
      prev: "Page précédente",
      next: "Page suivante",
    },
    footer: {
      message: "Publié sous license MIT",
      copyright: 'Copyright © 2025 <a href="https://github.com/sabinayo/" target="_blank" rel="noopener noreferrer">Sabinayo</a>'
    },
    
    sidebar: [
      {
        text: 'Intégration',
        items: [
          { text: 'Démarrage', link: '/fr/getting-started' },
          { text: 'Vue d\'ensemble du processus', link: '/fr/process-overview' }
        ]
      },
      
      {
        text: 'Flux de travail',
        collapsed: false,
        items: [
          { text: 'Configuration minimale', link: '/fr/workflows/workflow-configuration' },
          { text: 'Flux Android', link: '/fr/workflows/android-workflow' },
          { text: 'Flux iOS', link: '/fr/workflows/ios-workflow' },
          { text: 'Flux Web', link: '/fr/workflows/web-workflow' },
          { text: 'Flux Windows Desktop', link: '/fr/workflows/windows-desktop-workflow' },
          { text: 'Flux Linux', link: '/fr/workflows/linux-workflow' },
          { text: 'Flux macOS', link: '/fr/workflows/macos-workflow' },
          { text: 'Flux tout en un', link: '/fr/workflows/all-in-one-workflow' },
          { text: 'Modèles d\'exportation', link: '/fr/workflows/using-custom-export-templates' },
          { text: 'Compilation', link: '/fr/workflows/compiling' }
        ]
      },

      {
        text: 'Autre',
        items: [
          { text: 'Centre de téléchargement', link: '/fr/download-center' },
          { text: 'Historique de mise à jour', link: '/fr/changelog' }
        ]
      }
    ]
  }
}