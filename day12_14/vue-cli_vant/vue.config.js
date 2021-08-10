
// Vue CLI 脚手架的配置文件（修改此文件必需重启）
module.exports = {
    lintOnSave: false,  // 关闭ESLint
    // publicPath: '',
    devServer: {
        host: '0.0.0.0',
        port: 7000,
        open: true, // 自动打开浏览器
        inline: true
    },
    css: {  // 处理css 
        loaderOptions: {   // 加载器 处理样式 
            css: {},
            postcss: {   // 样式代码处理 
                plugins: [
                    // 补全css前缀(解决兼容性)
                    // require("autoprefixer")(),    // moz  ms  webkit 
                    // 把px单位换算成rem单位
                    require("postcss-px2rem")({   // px => rem 
                        remUnit: 37.5,  // VantUI 设计稿尺寸 375 
                        // rootValue: 75, // 换算的基数(设计图750的根字体为75)
                        // selectorBlackList: [".van", ".my-van"],// 要忽略的选择器并保留为px。
                        // propList: ["*"], //可以从px更改为rem的属性。
                        // minPixelValue: 2 // 设置要替换的最小像素值。
                        exclude: /node_modules/i
                    })
                ]
            }
        }
    }
}