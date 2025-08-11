const express = require('express')
const authRoutes = require('./routes/auth.route')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const promptRoutes = require('./routes/prompt.route')

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/prompt',promptRoutes)


module.exports = app