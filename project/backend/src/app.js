import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import hotelRoutes from './routes/hotelRoutes.js'
import reservationRoutes from './routes/reservationRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

const allowedOrigins = [
  'http://localhost:3000',
  'https://localhost:3000',
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    const vercelRegex = /^https:\/\/[a-zA-Z0-9-]+\.vercel\.app$/
    if (allowedOrigins.includes(origin) || vercelRegex.test(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'SkyStay Hotels Backend' })
})

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/reservations', reservationRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ message: err.message || 'Server error' })
})

export default app
