/** @format */

import express from 'express'
import fs from 'fs'
import axios from 'axios'
import { join } from 'path'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import { pickRandom } from '../../lib/function.js'

const apiR = express.Router()

const handleGetRequest = async (req, res) => {
  try {
    const { country } = req.params
    const filePath = join('src/scrape/data/asupan/image', `${country}.json`)

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        status: 'Not Found',
        message: 'File not found',
      })
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(500).json({
        status: 'Internal Server Error',
        message: 'Invalid data format',
      })
    }

    const randomImage = pickRandom(data)
    const response = await axios.get(randomImage, {
      responseType: 'stream',
    })

    res.setHeader('Content-Type', 'image/jpeg')
    response.data.pipe(res)
  } catch (error) {
    console.error('Error:', error.message)
    res.status(500).json({
      status: 'Internal Server Error',
      message: error.message,
    })
  }
}

apiR.get('/:country', apiKeyMiddleware, handleGetRequest)

export default apiR
