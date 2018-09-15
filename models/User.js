const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

// Mongoose.model(2 args) => we are trying to load something into into it
// Mongoose.model(1 arg) => we are trying to fetch something out of it
mongoose.model('users', userSchema);
