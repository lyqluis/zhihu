// 作为配置文件，直接导出配置对象即可
module.exports = {
    publicPath: './', 
    // ?
    lintOnSave: true, //default
    //代理服务器
    devServer: {
        // // 设置主机地址
        // host: 'localhost',
        // // 设置默认端口
        // port: 8080,
        // 设置代理
        // proxy: {
        //     'api': {
        //         // 目标 API 地址
        //         target: 'https://news-at.zhihu.com',
        //         // 如果要代理 websockets
        //         ws: true,
        //         // 将主机标头的原点更改为目标URL
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/api/4' //代理的路径
        //         },
        //     },
        // }
    }
}