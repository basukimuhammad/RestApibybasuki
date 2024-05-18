/** @format */

import { Router } from 'express'
import { serve, setup } from 'swagger-ui-express'
import swaggerDocument from '../lib/combinedJSON.js'
import redoc from 'redoc-express'
const routerDocs = Router()

routerDocs.get(
  '/redocs',
  redoc({
    title: '.M.U.F.A.R.',
    specUrl: '/swagger.json',
    nonce: '',
    // https://redocly.com/docs/api-reference-docs/configuration/functionality/
    redocOptions: {
      hideDownloadButton: true,
    },
  })
)

routerDocs.use('/docs', serve, async (req, res, next) => {
  try {
    const swaggerDoc = await swaggerDocument()
    setup(swaggerDoc, {
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        requestSnippetsEnabled: true,
        docExpansion: 'none',
        defaultModelsExpandDepth: 5,
        operationsSorter: 'method',
        tryItOutEnabled: true,
        showCommonExtensions: true,
        filter: true,
        deepLinking: true,
        validateResponses: true,
        validateModels: true,
        displayOperationId: true,
        showExtensions: true,
        showRequestHeaders: true,
        showResponseHeaders: true,
        showFullRequestSchema: true,
        showFullResponseSchema: true,
        showResponseCodes: true,
        showExternalDocs: true,
      },
      url: '/docs/',
      customCssUrl: '/assets/css/custom.css',
      customJs: ['/assets/js/custom2.js', '/assets/js/custom.js'],
      customfavIcon: '/assets/img/favicon.ico',
      customSiteTitle: author,
      explorer: false,
      deepLinking: true,
    })(req, res, next)
  } catch (error) {
    next(error)
  }
})

export default routerDocs
