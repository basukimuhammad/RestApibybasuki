/** @format */

import express from 'express'
import malScraper from 'mal-scraper'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const app = express.Router()

const successResponse = (res, code, data) => {
  res.json({
    status: 'Success',
    code,
    data,
  })
}

const handleError = (res, error) => {
  console.error(error)
  res.status(500).json({
    error: 'Internal Server Error',
  })
}

const handleSearch = async (req, res) => {
  try {
    const query = req.query.name
    const type = req.query.type || 'anime'
    const data = await malScraper.getResultsFromSearch(query, type)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleSeason = async (req, res) => {
  const { year, season, type } = req.query
  try {
    const data = await malScraper.getSeason(year, season, type)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleWatchlist = async (req, res) => {
  let { username, after, type, status } = req.query
  after = after ? Math.max(0, Math.min(Number(after), 300)) : 0
  type = type === 'manga' ? 'manga' : 'anime'
  status = status ? Math.max(0, Math.min(Number(status), 7)) : 0
  try {
    const data = await malScraper.getWatchListFromUser(
      username,
      after,
      type,
      status
    )
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleNews = async (req, res) => {
  const nbNews = req.query.nbNews || 20
  try {
    const data = await malScraper.getNewsNoDetails(nbNews)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleAnimeInfo = async (req, res) => {
  try {
    const { name, getBestMatch = true, type = 'anime' } = req.query
    const availableValues = {
      type: ['anime', 'manga'],
      getBestMatch: ['true', 'false'],
    }
    if (!name) {
      return res.status(400).json({
        error: 'Nama anime harus disediakan dalam query.',
      })
    }
    if (!availableValues.type.includes(type)) {
      return res.status(400).json({
        error: 'Tipe harus berupa anime atau manga.',
      })
    }
    if (!availableValues.getBestMatch.includes(getBestMatch.toString())) {
      return res.status(400).json({
        error: 'getBestMatch harus true atau false.',
      })
    }
    const data = await malScraper.getInfoFromName(
      name,
      getBestMatch === 'true',
      type
    )
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleInfoAnime = async (eeq, res) => {
  try {
    const { url } = req.query
    if (!url) {
      throw new Error('URL parameter is missing')
    }

    const data = await malScraper.getInfoFromURL(url)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleEpisodes = async (req, res) => {
  try {
    const { animeName, animeId } = req.query
    if (!animeName) {
      return res.status(400).send('Anime name is required.')
    }
    const data = animeId
      ? await malScraper.getEpisodesList({ name: animeName, id: animeId })
      : await malScraper.getEpisodesList(animeName)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleReviews = async (req, res) => {
  try {
    const { name } = req.query
    if (!name) {
      return res.status(400).json({
        error: 'Parameter name is required.',
      })
    }
    const data = await malScraper.getReviewsList({ name })
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleRecommendations = async (req, res) => {
  try {
    const animeName = req.query.name
    const animeId = req.query.id
    const data = animeId
      ? await malScraper.getRecommendationsList({
          name: animeName,
          id: animeId,
        })
      : await malScraper.getRecommendationsList(animeName)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleStats = async (req, res) => {
  try {
    const animeName = req.query.name
    const animeId = req.query.id
    const data = animeId
      ? await malScraper.getStats({ name: animeName, id: animeId })
      : await malScraper.getStats(animeName)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handlePictures = async (req, res) => {
  try {
    const animeName = req.query.name
    const animeId = req.query.id
    const data = animeId
      ? await malScraper.getPictures({ name: animeName, id: animeId })
      : await malScraper.getPictures(animeName)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

const handleUser = async (req, res) => {
  try {
    const { username } = req.query
    const data = await malScraper.getUser(username + '')
    console.log(data)
    successResponse(res, 200, data)
  } catch (error) {
    handleError(res, error)
  }
}

app.get('/:path', apiKeyMiddleware, async (req, res) => {
  const { path } = req.params
  switch (path) {
    case 'search':
      await handleSearch(req, res)
      break
    case 'season':
      await handleSeason(req, res)
      break
    case 'watchlist':
      await handleWatchlist(req, res)
      break
    case 'news':
      await handleNews(req, res)
      break
    case 'info-anime':
      await handleAnimeInfo(req, res)
      break
    case 'anime-info':
      await handleInfoAnime(req, res)
      break
    case 'episodes':
      await handleEpisodes(req, res)
      break
    case 'reviews':
      await handleReviews(req, res)
      break
    case 'recommendations':
      await handleRecommendations(req, res)
      break
    case 'stats':
      await handleStats(req, res)
      break
    case 'pictures':
      await handlePictures(req, res)
      break
    case 'user':
      await handleUser(req, res)
      break
    default:
      res.status(404).json({ error: 'Invalid path' })
      break
  }
})

export default app
