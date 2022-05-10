import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'portfolio-topright',
      'content-none fixed right-[0] top-[0] w-[15px] h-full bg-[#191923] z-[9999]',
    ],
    [
      'portfolio-topleft',
      'content-none fixed left-[0] top-[0] w-[15px] h-full bg-[#191923] z-[9999]',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWind(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    breakpoints: {
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
      'max-2xl': { max: '1535px' },
      'sm': '639px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1279px',
      '2xl': '1535px',
    },
  },
  rules: [
    ['bg-top', {
      'background-image': 'url(\'https://mayberks.me/wp-content/uploads/2020/09/bg.jpg\')',
    }],
    ['pointer-events-all', {
      'pointer-events': 'all',
    }],
    ['webkit-box-pack-start', {
      '-webkit-box-pack': 'start',
    }],
    ['webkit-box-pack-center', {
      '-webkit-box-pack': 'center',
    }],
    ['webkit-box-pack-justify', {
      '-webkit-box-pack': 'justify',
    }],
    ['webkit-box-align-center', {
      '-webkit-box-align': 'center',
    }],
    ['webkit-font-antialiased', {
      '-webkit-font-smoothing': 'antialiased',
    }],
    ['transform-none-important', {
      '-webkit-transform': 'none !important',
    }],
    ['font-stretch-normal', {
      'font-stretch': 'normal',
    }],
    ['font-size-inherit', {
      'font-size': 'inherit',
    }],
    ['text-rendering-auto', {
      'text-rendering': 'auto',
    }],
    ['font-variant-normal', {
      'font-variant': 'normal',
    }],
    ['portfolio-default-shadow', {
      'box-shadow': '0 3px 8px 0 rgb(15 15 20 / 20%)',
    }],
    ['portfolio-custom-shadow', {
      'box-shadow': '0 1px 4px 0 rgb(15 15 20 / 10%)',
    }],
    ['portfolio-avatar-gradient', {
      background: 'linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)',
    }],
    ['portfolio-bottom-gradient', {
      background: 'linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)',
    }],
    ['portfolio-top-bg-gradient', {
      'background-image': 'linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)',
    }],
    ['portfolio-side-bar-active', {
      '-webkit-transform': 'translateX(290px)',
      'transform': 'translateX(290px)',
    }],
  ],
})
