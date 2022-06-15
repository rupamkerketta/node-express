const constants = require('../utils/constants')

if (process.env.NODE_ENV !== constants.nodeEnvironments.production) {
	require('dotenv').config()
}

module.exports = {
	serverConfig: {
		port: process.env.PORT
	},
	dbConfig: {
		url: process.env.DB_URL
	}
}
