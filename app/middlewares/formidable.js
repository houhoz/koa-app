const formidable = require('formidable')

const { tempFilePath } = require('../config')

module.exports = () => {
  return async function (ctx, next) {
    const form = formidable({
      multiples: true,
      maxFileSize: 100 * 1024 * 1024, // 100 MB
      //  上传的临时文件保存路径
      uploadDir: `${process.cwd()}/${tempFilePath}`,
    })

    await new Promise((reslove, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          console.log(`err`, err)
          reject(err)
        } else {
          ctx.request.body = fields
          ctx.request.files = files
          reslove()
        }
      })
    })

    await next()
  }
}
