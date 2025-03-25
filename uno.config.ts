import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno } from 'unocss'
import { presetScalpel } from 'unocss-preset-scalpel'

export default defineConfig({
    // ...UnoCSS options
    presets: [presetScalpel(), presetUno({})],
    content: {
        filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
    },
    transformers: [transformerDirectives(), transformerVariantGroup()],
    rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^m-l-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
        [/^m-t-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
        [/^m-r-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
        [/^m-b-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
        [/^p-(\d+)$/, (match) => ({ padding: `${match}px` })],
    ],
})
