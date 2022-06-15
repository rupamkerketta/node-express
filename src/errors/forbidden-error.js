const { StatusCodes } = require('http-status-codes')
const CustomApiError = require('./custom-api-error')

class ForbiddenError extends CustomApiError {
	constructor(message) {
		super(message)
		this.statusCode = StatusCodes.FORBIDDEN
	}
}

module.exports = ForbiddenError
