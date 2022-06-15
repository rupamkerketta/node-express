const dummyRouter = require('./dummy.routes')

module.exports = (app) => {
	app.use('/', dummyRouter)
}
