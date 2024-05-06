export default {
    logo: <span>🐨 Pykan</span>,
    faviconGlyph: '🐨',
    project: {
      link: 'https://github.com/shadowqcom/Pykan'
    },
    docsRepositoryBase: 'https://github.com/shadowqcom/Pykan',
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Pykan'
      }
    },
    footer: {
      text: (
        <span>
          copyright © {new Date().getFullYear()}{' '}
          <a href="https://github.com/shadowqcom/Pykan" target="_blank">
            Pykan
          </a>
          . All Rights Reserved.
        </span>
      )
    }
  }