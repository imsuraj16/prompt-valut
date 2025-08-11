const express = require('express')
const { createPrompt } = require('../controllers/prompt.controller')
const authMiddleware = require('../middleware/auth.middlewae')


const router = express.Router()

router.post('/create',authMiddleware,createPrompt)




module.exports = router