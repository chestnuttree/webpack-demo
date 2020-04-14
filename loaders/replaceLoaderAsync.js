const loaderUtils = require('loader-utils')
module.exports = function (source) {
    const option = loaderUtils.getOptions(this)
    const callback = this.async()
    setTimeout(() => {
        const result = source.replace('123', this.query.name)
        callback(null, result)
    }, 1000)

}