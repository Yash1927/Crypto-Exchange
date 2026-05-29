const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const authRoutes = require('./auth')
const marketsRoutes = require('./markets')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/markets', marketsRoutes)

app.listen(3001, () => console.log('Server running on 3001'))