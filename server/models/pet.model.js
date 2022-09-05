const mongoose = require("mongoose");

// Create a Schema for pet
// title, price and description
const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [3, "the name must be at least 3 characters long"]
	},
	type: {
		type: String,
		minlength: [3, "the type must be at least 3 characters long"]
	},
	description: {
		type: String,
		minlength: [3, "the description must be at least 3 characters long"]
	},
	skills: {
		type: Array,
	},

}, { timestamps: true });

// create a constructor function for our model and store in variable 'Pet'
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;