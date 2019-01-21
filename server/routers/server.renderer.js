const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  console.log('template:',template)
  ctx.headers['Content-Type'] = 'text/html'
  
  const context = {url: ctx.path}
  
  try {
    const appString = await renderer.renderToString(context)
    const {
      title
    } = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      title: title.text(),
      style: context.renderStyles(),
      scripts: context.renderScripts(),
    })
    
    ctx.body = html
  } catch (e) {
    console.log('render error', e)
    throw e
  }
}
