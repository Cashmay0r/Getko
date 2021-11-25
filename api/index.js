import dotenv from 'dotenv'
import express from 'express'
import {
  connect
} from './db.js'
import user from './models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

dotenv.config()

connect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.get('/test', (req, res) => {
  res.send('Test Successful')
})

app.post('/register', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password
    } = req.body

    if (!(email && password && first_name && last_name)) {
      res.status(400).send('All input is required')
    }

    const existingUser = await user.findOne({
      email
    })

    if (existingUser) {
      return res.status(409).send('User Already Exists, please login.')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)
    const newUser = await user.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword
    })

    const token = jwt.sign({
        user_id: newUser._id,
        email
      },
      process.env.TOKEN_KEY, {
        expiresIn: '2h'
      }
    )

    newUser.token = token

    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
  }
})
export default {
  path: '/api',
  handler: app
}
