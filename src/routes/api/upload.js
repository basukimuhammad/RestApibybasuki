/** @format */

import express from 'express'
import multer from 'multer'
import path from 'path'
import * as sc from '../../scrape/index.js'
import User from '../../models/user.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()
const storage = multer.memoryStorage()
const upload = multer({
  storage,
})

apiR.post('/cdn', apiKeyMiddleware, upload.single('file'), async (req, res) => {
  try {
    const { buffer, originalname } = req.file
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const result = await sc.discord(buffer, originalname, ip)
    res.json({
      status: 'Success',
      code: 200,
      author,
      data: result,
    })
  } catch (error) {
    console.error('Error processing file upload:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the file upload.',
    })
  }
})

export default apiR
