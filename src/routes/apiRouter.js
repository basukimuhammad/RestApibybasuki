/** @format */

import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const apiRouter = express.Router()

apiRouter.use(cors())
apiRouter.use(express.urlencoded({ extended: true }))
apiRouter.use(express.json())

const importRoutes = async (routeModule) => {
  try {
    const { default: routeHandler } = await import(`./api/${routeModule}`)
    if (typeof routeHandler === 'function') {
      apiRouter.use(`/${routeModule.replace('.js', '')}`, routeHandler)
    } else {
      console.error(`No valid default function found in ${routeModule}`)
    }
  } catch (error) {
    console.error(`Error importing routes from ${routeModule}:`, error)
  }
}

 (async () => {
  try {
    const routeFiles = await fs.readdir(path.resolve(__dirname, 'api'))
    const routeModules = routeFiles.filter(
      (file) => file.endsWith('.js') && file !== 'router.js'
    )

    await Promise.all(routeModules.map(importRoutes))
  } catch (error) {
    console.error('Error reading route modules:', error)
  }
})()


export default apiRouter