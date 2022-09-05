const PetController = require("../controllers/pet.controller");

module.exports = app => {
  app.get("/api/pets/", PetController.findAllPets);
  // app.get("/api/pets/random", PetController.findOneSingleRandomPet); 
  app.get("/api/pets/name/:name", PetController.findOneSinglePetByName);
  app.get("/api/pets/:id", PetController.findOneSinglePet);
  app.post("/api/pets/new", PetController.createNewPet);
  // app.put("/api/pets/update/tow/:id", PetController.updateExistingPetPartTow);
  app.put("/api/pets/update/:id", PetController.updateExistingPet);
  app.delete("/api/pets/delete/:id", PetController.deleteAnExistingPet);
};