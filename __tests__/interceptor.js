// To create mock req and res object

module.exports = {
	mockRequest: () => {
		const req = jest.fn(() => {})
		return req
	},
	mockResponse: () => {
		const res = jest.fn(() => {})
		return res
	}
}
