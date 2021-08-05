const UniappGlobalComponentsRegisterPlugin = require('@lx-frontend/uniapp-global-components-register-plugin')
const UniappCustomComponentRegisterPlugin = require('@lx-frontend/uniapp-custom-component-register-plugin')
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      // 这两个插件目前只能写在plugins数组中，不能使用chainWebpack配置
      // 因为要保证它们在WebpackUniMPPlugin之后运行，在chainWebpack中无法保证顺序
      // TODO：后面继续寻找可靠的方法保证插件的执行顺序
      new UniappGlobalComponentsRegisterPlugin(),
    ]
  }
}
