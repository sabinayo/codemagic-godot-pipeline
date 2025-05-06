export default {
  lang: 'en',
  label: 'English',
  head: [],

  title: 'CGP',
  description: 'A documentation site for compiling, exporting and deploying Godot projects with Codemagic.',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/getting-started' },
      { text: 'Templates', link: '/download-center' },
      { text: 'Changelog', link: '/changelog' }
    ],
    editLink: {
      pattern: "https://github.com/sabinayo/codemagic-godot-pipeline/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License",
      copyright: 'Copyright © 2025 <a href="https://github.com/sabinayo/" target="_blank" rel="noopener noreferrer">Sabinayo</a>'
    },
    sidebar: [
      {
        text: 'Integration',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Process Overview', link: '/process-overview' }
        ]
      },

      {
        text: 'Workflows',
        collapsed: false,
        items: [
          { text: 'Workflow Configuration', link: '/workflows/workflow-configuration' },
          { text: 'Android workflow', link: '/workflows/android-workflow' },
          { text: 'iOS workflow', link: '/workflows/ios-workflow' },
          { text: 'Web workflow', link: '/workflows/web-workflow' },
          { text: 'Windows Desktop workflow', link: '/workflows/windows-desktop-workflow' },
          { text: 'Linux workflow', link: '/workflows/linux-workflow' },
          { text: 'macOS workflow', link: '/workflows/macos-workflow' },
          { text: 'All in one workflow', link: '/workflows/all-in-one-workflow' },
          { text: 'Custom export templates', link: '/workflows/using-custom-export-templates' },
          { text: 'Compiling', link: '/workflows/compiling' }
        ]
      },

      {
        text: 'Other',
        items: [
          { text: 'Download center', link: '/download-center' },
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ]
  }
}
