const express = require('express');
const authMiddleware = require('../middleware/auth.middlewae');



const router = express.Router()


router.get('/me', authMiddleware, (req, res) => {

    res.status(200).json(req.user)
})

router.get('/logout', (req, res) => {
    res.clearCookie("token")
    res.json({
        message: 'logged out successfully'
    })
})

module.exports = router;