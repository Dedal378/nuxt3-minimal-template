import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        custom: {
          circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>'
          /* And then, you can use it on your html: <span class="i-custom:circle"></span> */
        }
        // mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          }
        ],
      },
    })
  ]
})
