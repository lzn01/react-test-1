const path = require('path')
// 需要导出的对象
module.exports = {
    // 生产模式
    mode:'production',
    // 程序入口
    entry: {
        NUI: './lib/index.tsx' // 这里就是文件名
    },
    // 代码输出目录
    output: {
        // 要写绝对路径 (操作系统原因)
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'NUI',
        libraryTarget: 'umd',
    },
    // 解释.tsx
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
        ]
    }
}