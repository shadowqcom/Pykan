import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

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
    head: () => {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://pykan.org' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'Pykan'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'Pykan'}
          />
        </>
      )
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