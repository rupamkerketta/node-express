const mongoose = require('mongoose')
const config = require('config')

// DB connection string
const dbUrl = config.get('dbConfig.url')

const connect = async (callback) => {
	try {
		await mongoose.connect(dbUrl)
		console.log('[mongodb] Connected to the database successfully!')
		callback()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = connect
