import type { Preset, SourceCodeTransformer } from 'unocss'
import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetApplet,
  // presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'
import presetTheme from 'unocss-preset-theme'

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  /**
   * UnoCSS Applet
   * @see https://github.com/unocss-applet/unocss-applet
   */
  presets.push(presetApplet()) // 基本预设
  // presets.push(presetRemRpx()) // 如果需要使用 rem 转 rpx 单位，需要启用此插件
  // transformers.push(transformerAttributify()) //启用属性模式
  transformers.push(transformerApplet()) // 启用 Applet 兼容模式
}
else {
  presets.push(presetUno()) // 基本预设
  // presets.push(presetAttributify()) //启用属性模式
}

export default defineConfig({
  presets: [
    // 由 Iconify 提供支持的纯 CSS 图标解决方案
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    ...presets,
    presetTheme<Theme>({
      selectors: {
        dart: '[theme=dark]',
        test: '[theme=test]',
      },
      theme: {
        // Configure dark themes
        dark: {

        },
        // Configure compact themes
        test: {
          colors: {
            primary: '#333333',
            text: '#ffffff',
          }
        }
      }
    })
  ],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['abs-center', 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'],
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
    ...transformers,
  ],
})
