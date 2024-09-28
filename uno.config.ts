import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['bdr', ' border-red-400 border-dotted border-width-1px'],
    ['bdb', ' border-blue-400 border-dotted border-width-1px'],
    ['bdg', ' border-green-400 border-dotted border-width-1px'],
    ['bdw', ' border-white-400 border-dotted border-width-1px'],
    ['bdgray', ' border-gray-600 border-dotted border-width-1px'],
    ['bdf', ' border-fuchsia-400 border-dotted border-width-1px'],
    ['bdt', 'border-width-2px'],
    // dynamic shortcuts
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    [/^bd-(.*)-(.*)$/, ([, c, w]) => `border-${c}-500 border-dotted border-width-${w}`],
    // [/^bda-(.*)-(.*)-(.*)$/, ([, c, w, t]) => `border-${c}-500 border-width-${w} border-${t}`],
    ['section-separator', 'border-t border-gray-600'],
    ['btn', 'p-4px rounded bg-gray-600 text-white cursor-pointer hover:bg-gray-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-inverse', 'btn bg-transparent border-gray-600 dark:border-gray-600 border-solid border-width-1px text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-100'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    ['anchor', ' text-blue-500 hover:text-blue-600 cursor-pointer'],

    ['heading-base', 'font-500 text-gray-700 dark:text-gray-200 mt-8 leading-loose'],
    ['heading-1', 'heading-base text-4xl md:text-6xl'],
    ['heading-2', 'heading-base text-3xl md:text-5xl'],
    ['heading-3', 'heading-base text-xl md:text-2xl'],
    ['gradient-gray-one', 'bg-#f5f5f7 dark:bg-black border-t border-b border-gray-200 dark:border-gray-600'],
    ['base-text-color', 'text-gray-700 dark:text-gray-200 font-300'],
    ['base-bg-color', 'bg-white dark:bg-black'],
    ['base-paragraph', 'base-text-color text-2xl mt-10 mx-0 max-w-75ch'],
    ['base-paragraph-dim', 'base-paragraph dark:color-gray-5'],
    ['text-inverse', 'dark:text-gray-800'],
    ['base-section-width', 'max-w-7xl bdb bt'],
    ['base-section-list', 'base-text-color text-2xl my-4 md:my-6 ml-8 md:ml-12 list-square'],
    ['hours-list', 'flex justify-between base-text-color text-xl my-2 md:my-4 ml-0 list-none'],
    ['base-section-padding', ' p-6 md:p-8 lg:p-10 lg:p-14 xl:p-20'],
    ['hide-sm-only', 'hidden md:block'],
    ['image-placeholder', 'flex content-center items-center justify-center bg-gray-50 op-90 dark:op-10 text-4xl text-gray-300 dark:text-gray-800'],
    ['skin-section-quotes', 'min-h-200px text-xl md:text-2xl text-gray-400 dark:text-gray-400 px-6 md:px-12'],
    ['ring-light-gray', 'ring-1 ring-gray-3 dark:ring-gray-7'],

    ['text-debug-pre', 'text-orange-600 dark:text-orange-6 text-xs max-w-sm md:max-w-1024px text-wrap overflow-auto bg-violet-50 dark:bg-gray-8 p-2'],
    ['blog-card', 'relative col-span-1 flex flex-col rounded-lg p-4 ring-light-gray'],
    ['blog-card-tag', 'border-l-transparent absolute right-0 top-0 h-0 w-0 border-b-24 border-l-0 border-r-24 border-t-0 border-b-transparent border-r-yellow-400 border-t-transparent border-solid op-70'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
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
})
