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

routerDocs.use(
  '/docs',
  serve,
  async (req, res, next) => {
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
        customCssUrl: '/assets/css/custom.css',
        customJs: [
          // '/assets/js/custom2.js', // Particle optional
          // '/assets/js/custom.js' // background changers optional
        ],
        customfavIcon: '/assets/img/favicon.ico',
        customSiteTitle: author,
        explorer: true,
        deepLinking: true,
      })(req, res, next)
    } catch (error) {
      next(error)
    }
  }
)

export default routerDocs
