// controllers/animalController.js
let animals = [
    { id: 1, name: 'Lion', species: 'Panthera leo' },
    { id: 2, name: 'Elephant', species: 'Loxodonta africana' },
    { id: 3, name: 'Tiger', species: 'Panthera tigris' }
  ];
  
  // GET all animals
  const getAllAnimals = (req, res) => {
    res.json(animals);
  };
  
  // POST a new animal
  const addAnimal = (req, res) => {
    const animal = req.body;
    animals.push(animal);
    res.status(201).send('Animal added successfully');
  };
  
  // PUT update an animal
  const updateAnimal = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedAnimal = req.body;
    animals = animals.map(animal => {
      if (animal.id === id) {
        return { ...animal, ...updatedAnimal };
      }
      return animal;
    });
    res.send('Animal updated successfully');
  };
  
  // DELETE an animal
  const deleteAnimal = (req, res) => {
    const id = parseInt(req.params.id);
    animals = animals.filter(animal => animal.id !== id);
    res.send('Animal deleted successfully');
  };
  
  module.exports = {
    getAllAnimals,
    addAnimal,
    updateAnimal,
    deleteAnimal
  };
  