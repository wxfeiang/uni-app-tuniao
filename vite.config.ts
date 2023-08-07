import uni from "@dcloudio/vite-plugin-uni"
import { defineConfig } from "vite"
// 加上下面这一行
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [
    uni(),
    // 加上下面的配置
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: ["vue", "uni-app"],
      dts: "typings/auto-imports.d.ts"
    }),
    Components({
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components"], //默认为 src/components
      dts: "typings/components.d.ts", // 可以自定义文件生成的位置，默认是根目录下
      extensions: ["vue", "md", "jsx", "ts", "tsx"], // 配置需要将哪些后缀类型的文件进行自动按需引入
      // 第三方组件库的解析器
      resolvers: []
    })
  ]
})
