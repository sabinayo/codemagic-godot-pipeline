import { defineConfig } from 'vitepress'
import { default as locale_en } from './locales/config.en.js'
import { default as locale_fr } from './locales/config.fr.js'

export default defineConfig({
  base: '/codemagic-godot-pipeline/',
  head: [['link', { rel: 'icon', href: '/codemagic-godot-pipeline/favicon.ico' }]],
  locales: {
    root: locale_en,
    fr: locale_fr
  },
  
  themeConfig: {
    logo: '/icon.svg',
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          fr: {
            translations: {
              button: {
                buttonText: 'Rechercher...',
                buttonAriaLabel: 'Rechercher'
              },
              modal: {
                displayDetails: 'Afficher/Cacher les détails de chaque liste',
                resetButtonTitle: 'Redémarrer la recherche',
                backButtonTitle: 'Mettre fin à la recherche',
                noResultsText: 'Aucun résultat pour : ',
                footer: {
                  selectKeyAriaLabel: 'Touche entrée',
                  selectText: 'Pour sélectionner',
                  navigateUpKeyAriaLabel: 'Flèche haut',
                  navigateDownKeyAriaLabel: 'Flèche bas',
                  navigateText: 'Pour la navigation',
                  closeKeyAriaLabel: 'Touche échap',
                  closeText: 'Pour fermer la boite de dialogue'
                }
              }
            }
          }
        }
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sabinayo' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/sabinayo.bsky.social' }
    ]
  }
})
