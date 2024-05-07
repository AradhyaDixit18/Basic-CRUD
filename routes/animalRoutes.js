// routes/animalRoutes.js
const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// GET all animals
router.get('/', animalController.getAllAnimals);

// POST a new animal
router.post('/', animalController.addAnimal);

// PUT update an animal
router.put('/:id', animalController.updateAnimal);

// DELETE an animal
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
