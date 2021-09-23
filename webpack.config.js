// 需要导出的对象
module.exports = {
    // 程序入口
    entry: {
        index: './lib/index.tsx'
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