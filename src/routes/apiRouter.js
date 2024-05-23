/** @format */

import express from 'express'
import cors from 'cors'
import path, { dirname } from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = dirname(
  fileURLToPath(import.meta.url)
)
const apiRouter = express.Router()

apiRouter.use(cors())
apiRouter.use(
  express.urlencoded({ extended: true })
)
apiRouter.use(express.json())

const importRoutes = async routeModule => {
  try {
    const routeHandler = (
      await import(`./api/${routeModule}`)
    ).default
    if (typeof routeHandler === 'function') {
      const routeName = routeModule.replace(
        '.js',
        ''
      )
      apiRouter.use(`/${routeName}`, routeHandler)

      const routePaths = routeHandler.stack
        .map(layer => {
          if (layer.route) {
            return layer.route.path
          }
        })
        .filter(path => path !== undefined)

      console.log(
        `Loaded route: /${routeName} with paths:`,
        routePaths
      )
    } else {
      console.error(
        `Invalid route handler in ${routeModule}`
      )
    }
  } catch (error) {
    console.error(
      `Error importing ${routeModule}:`,
      error
    )
  }
}
;(async () => {
  try {
    const routeFiles = await fs.readdir(
      path.resolve(__dirname, 'api')
    )
    const routeModules = routeFiles.filter(
      file =>
        file.endsWith('.js') &&
        file !== 'router.js'
    )
    await Promise.all(
      routeModules.map(importRoutes)
    )
  } catch (error) {
    console.error('Error loading routes:', error)
  }
})()

export default apiRouter
