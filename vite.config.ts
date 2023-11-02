import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteSingleFile } from "vite-plugin-singlefile"
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import { UniUseAutoImports } from '@uni-helper/uni-use';
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    UniPages({
      subPackages: [
        'src/pages-sub',
      ],
    }),
    UniLayouts(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        '@vueuse/core',
        UniUseAutoImports
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Components({
      // dts: 'src/components.d.ts',
    }),
    Unocss(),
    // VueDevTools(),
    uni(),
    // vue实验性功能
    ReactivityTransform(),
    // h5打包单文件
    // viteSingleFile()
  ]
})
