// This file will have the setup for mongodb in-memory db
// The in-memory db will be used for integration testing
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
let mongodbMem

// Method for connecting to the Database
exports.connect = async () => {
	mongodbMem = await MongoMemoryServer.create()
	const uri = mongodbMem.getUri()
	const mongooseOpts = {
		maxPoolSize: 10
	}
	await mongoose.connect(uri, mongooseOpts)
}

// Method for disconnecting and stopping the in-memory db
exports.closeDatabase = async () => {
	await mongoose.connection.dropDatabase()
	await mongoose.connection.close()
	if (mongodbMem) {
		await mongodbMem.stop()
	}
}

// Method to clear all the data in the DB
exports.clearDatabase = async () => {
	const collections = mongoose.connection.collections
	const delPromises = []
	for (const key in collections) {
		const collection = collections[key]

		// This will clear all the documents in a collection
		delPromises.push(collection.deleteMany())
	}
	await Promise.all(delPromises)
}
