const express = require('express')
const { createPrompt, editPrompt, userprompts } = require('../controllers/prompt.controller')
const authMiddleware = require('../middleware/auth.middlewae')


const router = express.Router()

router.post('/create',authMiddleware,createPrompt)
// router.get('/',authMiddleware,getAllPrompts)
router.get('/myPrompts',authMiddleware,userprompts)

router.patch('/:id',authMiddleware,editPrompt)




module.exports = router