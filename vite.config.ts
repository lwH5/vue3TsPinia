import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/css/scss/globalVar.scss";@import "src/assets/css/scss/globalMixin.scss";'
      }
    },
    postcss:{
      plugins:[
        postCssToRem({
          rootValue:37.5,
          propList:['*']
        })
      ]
    }
  }
})
