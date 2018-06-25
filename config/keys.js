// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	// if we're in the production environment (i.e. we're running on heroku cloud)
	module.exports = require('./prod');
} else {
	// if we're in a development environment
	module.exports = require('./dev');
}
