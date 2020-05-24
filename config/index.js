const dotenv = require('dotenv')

dotenv.config()

module.exports = {
	databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/mevmongo'
}
