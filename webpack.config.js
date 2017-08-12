/**
 * Created by melissa on 2017/8/11.
 */

var htmlWP = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',//入口文件路径
    output:{
        path:__dirname + '/dist',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                loader:'url-loader?limit=10000&name=images/[hash:8].[name].[ext]'//表示图片大小小于20k为临界值，大于20k的图片不被打包
            },
            // {
            //     test:/\.js$/,//将js文件中的es6语法转成es5语法
            //     loader:'babel-loader',//表示图片大小小于20k为临界值，大于20k的图片不被打包
            //     exclude:/node_modules/
            // },
            {
                test:/\.vue$/,//解析.vue组件页面
                loader:'vue-loader'
            }
        ]
    },
    // babel:{
    //     presets:['es2015'], //配置将es6语法转换成es5语法
    //     plugins:['transform-runtime']
    // },
    plugins:[
        new htmlWP({
            title: '首页',  //生成的页面标题
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'template.html' //根据template.html这个模板来生成(这个文件程序员自己书写)
        })
    ]
};