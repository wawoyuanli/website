// const { resolve } = require("core-js/fn/promise");

module.exports={
    devServer:{

    },
    configureWebpack:{
        // name:name,
        resolve:{
            //配置别名
            alias:{
                 'assets':'@/assets', 
                 'components':'@/components',
                 'views':'@/views'
            }
        }
    },
    // plugins:[
    //     new webpack.ProvidePlugin({
    //         $:'jquery',
    //         jQuery:'jquery',
    //         "windows.jQuery":'jquery'
    //     })
    // ]
}