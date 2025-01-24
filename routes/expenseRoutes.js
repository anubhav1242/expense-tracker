const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get all expenses for the authenticated user
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});

// Create a new expense
router.post('/', async (req, res) => {
  try {
    const expense = new Expense({
      ...req.body,
      user: req.userId
    });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error creating expense', error });
  }
});

// Update an expense
router.put('/:id', async (req, res) => {
  try {
    const expense = await Expense.findOne({ 
      _id: req.params.id,
      user: req.userId 
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    // Update only allowed fields
    const updates = {
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
      notes: req.body.notes
    };

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error });
  }
});

// Delete (DELETE) - Delete an expense by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error });
  }
});

module.exports = router;
