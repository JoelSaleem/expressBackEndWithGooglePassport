const express = require('express');
const passport = require('passport');
require('./services/passport');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world!');
});

console.log(process.env);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
