const list = async ctx => {
  const { name, age } = ctx.request.query
  ctx.body = name + age
  // const data = ''
  // ctx.utils.assert(data, ctx.utils.throwError(10001, '验证码失效'))
  // ctx.body = '返回结果'
}

module.exports = {
  list,
}
