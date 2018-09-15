// keys.js - figure out what set of credentials to return

// Note: different google project for protecting client id and clientSecret

// different mongoDB since we do not want to do development on a production database,
// otherwise we risk messing with our users' data

if (process.env.NODE_ENV === 'production') {
	// if we're in the production environment (i.e. we're running on heroku cloud)
	module.exports = require('./prod');
} else {
	// if we're in a development environment
	module.exports = require('./dev');
}
