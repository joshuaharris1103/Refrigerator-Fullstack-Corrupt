// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const fridgeSchema = new Schema(
	{
		itemName: { 
			type: String,
			required: true },
		description: { 
			type: String},
        quantity: { 
			type: Number,
			required: true },
		readyForUse: { 
			type: Boolean,
			required: true },
		dateAdded: { 
			type: Date,
			required: true },
		timeRefrigerated: { 
			type: Date,
			required: true },
		expiration: { 
			type: Date,
			required: true },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

const Fridge = model('Fridge', fridgeSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Fridge
