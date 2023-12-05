// uno.config.ts
import { defineConfig, presetMini } from 'unocss';

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
      bgNatural: '#FDFDFD',
    },
  },
  presets: [
    presetMini(),
    // presetIcons(),
    // presetAttributify(),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ],
  transformers: [
    // transformerDirectives(),
    // transformerVariantGroup()
  ],
});
