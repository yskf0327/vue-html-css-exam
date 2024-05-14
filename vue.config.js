const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pages:{
    entry:'src/main.js',
    title:'HTML/CSS確認テスト'
  }
}
