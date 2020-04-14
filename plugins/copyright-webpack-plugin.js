// 生成版权文件
class CopyrightWebpackPlugin {
    // constructor(options) {
    //     console.log(options);

    // }
    // webpack实例：compiler
    apply(compiler) {
        // 钩子函数
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // console.log(compilation.assets);
            debugger
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by hello yun'
                },
                size: function () {
                    return 21;
                }
            }
            cb()

        })

    }
}
module.exports = CopyrightWebpackPlugin