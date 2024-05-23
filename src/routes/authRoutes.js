/** @format */

import express from 'express'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import nodemailer from 'nodemailer'

const router = express.Router()

router.get('/auth/register', registerUser)
router.get('/auth/profile', getUserProfile)
router.get('/cekey', checkApiKey)

async function registerUser(req, res) {
  try {
    const { email, password, username, apiKey } = req.query

    if (!email || !validator.isEmail(email))
      return res.status(400).json({
        error: 'Valid email is required.',
      })
    if (
      !password ||
      !validator.isLength(password, {
        min: 6,
      })
    )
      return res.status(400).json({
        error: 'Password must be at least 6 characters long.',
      })
    if (
      !username ||
      !validator.isLength(username, {
        min: 3,
      })
    )
      return res.status(400).json({
        error: 'Username must be at least 3 characters long.',
      })
    if (!apiKey)
      return res.status(400).json({
        error: 'API key is required.',
      })

    const existingUser = await User.findOne({
      email,
    })
    if (existingUser)
      return res.status(400).json({
        error: 'User with this email already exists.',
      })
    const existingKey = await User.findOne({
      apiKey,
    })
    if (existingKey && existingKey.apiKey === apiKey)
      return res.status(400).json({
        error: 'User with this apiKey already exists.',
      })

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      apiKey,
      email,
      password: hashedPassword,
      username,
    })
    await newUser.save()

    const accessToken = jwt.sign(
      {
        email,
      },
      'Konbanwa',
      {
        expiresIn: '15m',
      }
    )

    const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${accessToken}`

    await sendVerificationEmail(email, verificationUrl)

    res.send('Check email for verification')
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}

async function getUserProfile(req, res) {
  try {
    const { email, password } = req.query

    const user = await User.findOne({
      email,
    })

    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).json({
        error: 'Invalid email or password.',
      })

    res.json({
      email: user.email,
      username: user.username,
      limit: user.limit,
      status: user.status,
      apiKey: user.apiKey,
      isVerified: user.isVerified,
    })
  } catch (error) {
    console.error('Error logging in:', error)
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}

async function checkApiKey(req, res) {
  const { key } = req.query
  const user = await User.findOne({
    apiKey: key,
  })

  if (!user)
    return res.status(400).json({
      error: 'Invalid API key.',
    })

  res.json({
    limit: user.limit,
  })
}

async function sendVerificationEmail(toEmail, verificationUrl) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lzaky404@gmail.com',
      pass: 'kqfsqrqrdigiaicr',
    },
  })

  const mailOptions = {
    from: '"M.U.F.A.R." <admin@onlasdan.tech>',
    to: toEmail,
    subject: 'Account Verification',
    html: `
    <div style="position: relative; background-color: #333333; padding: 20px; font-family: Arial, Helvetica, sans-serif; border-radius: 10px;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.5; border-radius: 10px;">
        <img src="https://telegra.ph/file/493b3e4aee89e29eae36c.jpg" alt="Background" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
      </div>
      <div style="position: relative; z-index: 1;">
        <div style="display: flex; justify-content: center; margin-bottom: 20px;">
          <img src="https://telegra.ph/file/493b3e4aee89e29eae36c.jpg" alt="Logo" width="100" height="100" style="border-radius: 50%;">
        </div>
        <h2 style="font-size: 24px; text-align: center; color: #ffffff;">Please verify your email address to access your account:</h2>
        <div style="text-align: center;">
          <a href="${verificationUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; font-size: 18px; text-decoration: none; display: inline-block; border-radius: 5px;">Verify Email Address</a>
        </div>
        <p style="font-size: 16px; text-align: center; color: #ffffff; margin-top: 20px;">If the button above doesn't work, you can use the following link:</p>
        <p style="font-size: 16px; text-align: center; color: #ffffff;"><a href="${verificationUrl}" style="color: #007bff; text-decoration: none;">click here if the button above doesn't work</a></p>
        <p style="font-size: 14px; text-align: center; color: #ffffff;">This verification link will expire in 14 minute.</p>
        <p style="font-size: 14px; text-align: center; color: #ffffff;">Thank you,</p>
        <p style="font-size: 14px; text-align: center; color: #ffffff;">NoxVenenum autor .M.U.F.A.R.</p>
      </div>
    </div>
  `,
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error sending verification email:', error)
  }
}

export default router
