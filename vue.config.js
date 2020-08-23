const webpack = require('webpack')

module.exports={
    
    /*
    **  是一个函数，会接受一个基于webpack-chain的config实例
    **  允许对内部的webpack配置进行更细粒度的修改
    */
    // chainWebpack:config=>{
    //     config.plugin('provide').use(webpack.ProvidePlugin,[{
    //         $:'jquery',
    //         jquery:'jquery',
    //         jQuery:'jquery',
    //         'window.jQuery':'jquery'
    //     }])
    // }
}