/** @format */

import express from 'express'
import path from 'path'
import {
  checkTokenExpiration,
  markUserAsVerified,
  verifyToken,
} from '../middlewares/verifyMiddleware.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const router = express.Router()

router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params
    const decoded = verifyToken(token)
    await markUserAsVerified(decoded.email)

    const filePath = path.resolve(
      __dirname,
      '../views/pages/assets/verification.html'
    )
    res.sendFile(filePath)
  } catch (error) {
    console.error('Error verifying email:', error)
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
})

export default router
