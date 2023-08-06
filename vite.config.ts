import uni from "@dcloudio/vite-plugin-uni"
import { defineConfig } from "vite"
// 加上下面这一行
import AutoImport from "unplugin-auto-import/vite"

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
    })
  ]
})
