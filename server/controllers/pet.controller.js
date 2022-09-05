//  this file will house all of our logic for creating, retrieving, updating, and deleting ... CRUD

const Pet = require("../models/pet.model");

// - for the faker -
const { faker } = require("@faker-js/faker");
const fakerId = faker.datatype.uuid();

// --- function to get all pets
module.exports.findAllPets = (req, res) => {
  // ...retrieve an array of all documents in the pet collection
  Pet.find({})
    .then(allDaPets => res.json(allDaPets))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// --- function to get a single Pet
module.exports.findOneSinglePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then(oneSinglePet => res.json({ pet: oneSinglePet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// --- function to get a single Pet by name -------------------------------------+++
module.exports.findOneSinglePetByName = (req, res) => {
  Pet.findOne({ name: req.params.name })
    .then(oneSinglePet => res.json({ pet: oneSinglePet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// // --- a function to get a random single pet
// module.exports.findOneSingleRandomPet = (req, res) => {
//   let random = Math.floor(Math.random() * (Pet.length))
//   // (Math.floor(Pet.length/2))
// 	Pet.findOne().skip(random) 
// 		.then(oneSinglePet => res.json({ pet: oneSinglePet }))
// 		.catch(err => res.json({ message: "Oh no", error: err }));
// };

// --- function to create a pet
module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// --- function to update a pet
module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators:true })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// ------------------------------
// findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true}
// module.exports.updateExistingPetPartTow = (req, res) => {
//   Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators:true})
//     .then(updatedPet => res.json({ pet: updatedPet }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
// ------------------------------

// --- function to delete a pet
module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



