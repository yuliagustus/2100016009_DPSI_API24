const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await db.Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await db.Order.findByPk(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new order
router.post('/', async (req, res) => {
    try {
        const newOrder = await db.Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
