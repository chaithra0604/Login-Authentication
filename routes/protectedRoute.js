const express = require('express');
const router = express.Router();
const verifiedToken = require('../middleware/authMiddleware');

router.get('/',verifiedToken,(req,res) => {
    res.status(200).json({message : "Protected route accessed"});
})

module.exports = router;