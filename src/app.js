/** @format */

import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import chalk from 'chalk'
import resetLimitsCron from './lib/resetLimitsCron.js'
import apiR from './routes/apiRouter.js'
import authRoutes from './routes/authRoutes.js'
import routerDocs from './routes/docsRouter.js'
import verifyRoutes from './routes/verifyRoutes.js'
import R404 from './views/error.js'
import helloRouter from './views/home.js'
import customLogger from './lib/logger.js'

const app = express()

resetLimitsCron()

if (process.env.NODE_ENV === 'development') {
  app.use(customLogger)
}

app.use(cors())
app.use(helmet())
app.use(compression())
app.set('trust proxy', 1)
app.set('json spaces', 2)

app.use(routerDocs)
app.use('/', helloRouter, verifyRoutes, apiR, authRoutes)
app.use(R404)

app.use((err, req, res, next) => {
  console.error(chalk.red(err.stack))
  res.status(500).sendFile(path.join(__dirname, 'views', '500.html'))
})

export default app
