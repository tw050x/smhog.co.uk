import * as environment from './environment'
import * as Stack from 'koa'

import { createBundleRenderer } from 'vue-server-renderer'
import { createServer } from 'http'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const renderer = createBundleRenderer(resolve('.', 'bundle.json'), {
  clientManifest: JSON.parse(readFileSync(resolve('.', 'manifest.json'), 'utf-8')),
  runInNewContext: false,
  template: readFileSync(resolve('.', 'template.html'), 'utf-8')
})

const Service = new Stack()

Service.use(async function (context) {

  try {
    context.body = await renderer.renderToString({
      base: '/',
      // @todo: hardcoded meta is bad idea... update to something better
      meta: {
        description: 'Weekly speech & drama classes in Manchester by South Manchester Helen O\'Grady Drama Academy',
        keywords: 'drama, acting, speech, drama classes, acting classes, speech classes',
        title: 'South Manchester Helen O\'Grady Drama Academy'
      },
      url: context.url
    })
  }

  catch (error) {
    if (process.env.NODE_ENV === 'development') console.log(error)
    switch (error.message) {
    case 'not-found' :
      context.response.body = {
        errors: [
          {
            status: 404,
            title: 'Not Found'
          }
        ]
      }
      context.response.status = 404
      break
    case 'internal-server-error' :
    default :
      context.response.body = {
        errors: [
          {
            status: 500,
            title: 'Internal Server Error'
          }
        ]
      }
      context.response.status = 500
    }
  }

  finally {
    context.type = 'text/html; charset=utf-8'
  }

})

createServer(Service.callback()).listen(environment.SERVICE_MARKETING_HTTP_PORT, () => console.log(`insecure server running on port ${environment.SERVICE_MARKETING_HTTP_PORT}`))
