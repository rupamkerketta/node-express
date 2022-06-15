require('express-async-errors')
const config = require('config')

const app = require('./app')
const PORT = config.get('serverConfig.port')

const startServer = () => {
	// Start the express server
	app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
}

// DB connect
const dbConnect = require('./db')
dbConnect(startServer)
