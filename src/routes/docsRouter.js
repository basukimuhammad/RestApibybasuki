/** @format */

import { Router } from 'express'
import { serve, setup } from 'swagger-ui-express'
import swaggerDocument from '../lib/combinedJSON.js'
// import redoc from 'redoc-express'
const docs = Router()

// docs.get(
  // '/redocs',
  // redoc({
    // title: '.M.U.F.A.R.',
    // specUrl: '/swagger.json',
    // nonce: '',
    // redocOptions: {
      // hideDownloadButton: true,
    // },
  // })
// )
const swaggerDoc = await swaggerDocument()
console.log(swaggerDoc)
docs.use(
  '/docs',
  serve,
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
      showRequestHeaders: false,
      showResponseHeaders: false,
      showFullRequestSchema: true,
      showFullResponseSchema: true,
      showResponseCodes: true,
      showExternalDocs: false,
    },
    customCssUrl: '/assets/css/custom.css',
    // customJs: [
    // '/assets/js/custom2.js', // Particle optional
    // '/assets/js/custom.js' // background changers optional
    // ],
    customfavIcon: '/assets/img/favicon.ico',
    customSiteTitle: 'Xyla',
    explorer: false,
    deepLinking: true,
  })
)

export default docs