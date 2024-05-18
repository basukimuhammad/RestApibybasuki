/** @format */

import express from 'express'
import * as sc from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
const apiR = express.Router()

const successResponse = (res, code, data) => {
  res.json({
    status: 'Success',
    code,
    data,
  })
}

const errorResponse = (res, code, message) => {
  res.status(code).json({
    error: message,
  })
}

const checkQueryParam = (param, res) => {
  if (!param.q) {
    errorResponse(res, 400, 'Query parameter "q" is required.')
    return true
  }
  return false
}
apiR.get('/xvideos', apiKeyMiddleware, async (req, res) => {
  try {
    const { query, short, date, duration, quality, page } = req.query

    const videos = await sc.xvideoS(query, short, date, duration, quality, page)

    successResponse(res, 200, videos)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
})
apiR.get('/:feature', apiKeyMiddleware, async (req, res, next) => {
  const { feature } = req.params
  const param = req.query
  let data
  try {
    switch (feature) {
      case 'youtube':
        if (checkQueryParam(param, res)) return
        data = await sc.youtube(param.q)
        break

      case 'xnxx':
        if (checkQueryParam(param, res)) return
        data = await sc.xnxxSearch(param.q)
        break

      case 'dvasearch':
        if (checkQueryParam(param, res)) return
        data = await sc.scrapeGameData(param.q)
        break

      case 'komikcast':
        if (checkQueryParam(param, res)) return
        data = await sc.KomikCast(param.q)
        break

      case 'wikipedia':
        if (checkQueryParam(param, res)) return
        data = await sc.wikipedia(param.q)
        break

      case 'bukalapak':
        if (checkQueryParam(param, res)) return
        data = await sc.bukalapak(param.q)
        break

      case 'tiktoks':
        if (checkQueryParam(param, res)) return
        data = await sc.tiktoks(param.q)
        break

      default:
        res.status(404).json({
          error: 'Invalid feature.',
        })
        break
    }
    if (!param.q)
      return errorResponse(res, 400, 'Tidak ada data yang ditemukan')

    successResponse(res, 200, data)
  } catch (error) {
    next(error)
  }
})

export default apiR
