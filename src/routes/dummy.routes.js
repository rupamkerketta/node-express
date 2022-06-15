const express = require('express')
const { StatusCodes } = require('http-status-codes')
const router = express.Router()

router.route('/').get((req, res) => {
	res.send({ message: 'Node Express Server Template' })
})

module.exports = router
