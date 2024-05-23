const express = require('express');
const router = express.Router();
const { person } = require('./../models/person')
 // Assuming your model is correctly defined and exported in this file

// Route to get all persons
router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        res.status(200).json(data);
    } catch (err) {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get persons by workType
router.get('/:workType', async (req, res) => {
    const workType = req.params.workType;
    if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
        try {
            const response = await person.find({ work: workType });
            res.status(200).json(response);
        } catch (err) {
            console.error('Internal server error', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(400).json({ error: 'Invalid work type' });
    }
});

// Route to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(201).json(response);
    } catch (err) {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = req.body;
        const response = await person.findByIdAndUpdate(personId, updatedPerson, {
            new: true, // Returns the modified document rather than the original
            runValidators: true, // Runs update validators on this command
        });
        if (!response) {
            return res.status(400).json({ error: 'Invalid person ID' });
        }
        res.status(200).json(response); // Return the updated person data
    } catch (err) {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(400).json({ error: 'Invalid person ID' });
        }
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router; // Export the router directly
