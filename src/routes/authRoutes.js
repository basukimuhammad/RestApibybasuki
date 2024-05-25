/** @format */

import express from 'express'
import {
  checkApiKey,
  getUserProfile,
  registerUser,
} from '../middlewares/authMiddleware.js'
const router = express.Router()

router.get('/auth/register', registerUser)
router.get('/auth/profile', getUserProfile)
router.get('/cekey', checkApiKey)

export default router
