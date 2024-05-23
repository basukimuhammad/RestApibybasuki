/** @format */

import express from 'express'
import axios from 'axios'
import * as sc from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import { pickRandom } from '../../lib/function.js'
const apiR = express.Router()
const getRandomImage = async url => {
  const response = await axios.get(url, {
    responseType: 'stream',
  })
  return response.data
}

apiR.get('/:username', async (req, res) => {
  try {
    const { username } = req.params
    const result = await sc.coomer(username)
    const random = pickRandom(result)
    const imageStream =
      await getRandomImage(random)
    res.setHeader('Content-Type', 'image/jpeg')
    imageStream.pipe(res)
  } catch (error) {
    console.log(error)
  }
})

export default apiR
