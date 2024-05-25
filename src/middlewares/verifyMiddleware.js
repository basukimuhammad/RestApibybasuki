/** @format */

import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const verifyToken = token => {
  if (!token) {
    throw new Error('Token not provided.')
  }

  return jwt.verify(token, 'Konbanwa')
}

// Fungsi untuk memeriksa apakah token telah kedaluwarsa
const checkTokenExpiration = err => {
  if (err.name === 'TokenExpiredError' && err.message === 'jwt expired') {
    throw new Error(
      'Email verification token has expired. Please request a new verification email.'
    )
  }

  throw err
}

// Fungsi untuk menandai pengguna sebagai terverifikasi
const markUserAsVerified = async email => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('User not found.')
  }

  if (user.isVerified) {
    throw new Error('User is already verified.')
  }

  user.isVerified = true
  await user.save()
}

export { checkTokenExpiration, markUserAsVerified, verifyToken }
