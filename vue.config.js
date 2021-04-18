const path = require('path')
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  //输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  //eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        // include: ["./src/icons"]
      });
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        javascriptEnabled: true, //less 配置
        prependData: `@import "@/assets/less/variable.less;"`
      }
    }
  },
  parallel: require('os').cpus().length > 1,
  /**
  *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  */
  pwa: {},
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      [process.env.VUE_APP_API]: { 
        target: "http://g36469v144.zicp.vip", //API服务器的地址  http://g36469v144.zicp.vip
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_API]: '' // es5
          // [`^${process.env.VUE_APP_API}`]: '' //es6
        }
      }
    },
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    // before: app => {
    // }
  },
  /**
  * 第三方插件配置
  */
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/varibles.less')
      ],
    }
  }
}
