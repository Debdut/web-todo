const dotenv = require('dotenv')

const ENV_VARS = [ 'DB_USER', 'DB_HOST', 'DB_DATABASE', 'DB_PASSWORD', 'DB_PORT', 'PORT' ]

class Config {
	constructor () {
		dotenv.config()
		
		ENV_VARS.forEach(env => {
			this[env] = process.env[env]
		})

		this.MAX_CONCURRENCY = parseInt(this.MAX_CONCURRENCY, 10)
	}

	checkEnvVariables () {
		ENV_VARS.forEach(key => {
			if (!process.env[key]) {
				console.log(`[Warning] Missing the environment variable ${key}`)
			}
		}) 
	}
}

const config = new Config()

module.exports = config