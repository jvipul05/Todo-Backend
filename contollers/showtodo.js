const mongoose = require('mongoose');
const todo = require('../models/todo');

exports.showTodo = async (req, res) => {
    try {
        const response = await todo.find();
        res.status(200).json(
            {   success: true,
                message: 'Todo fetched successfully',
                data: response });
    } catch (error) {
        res.status(500).json({ 
             success: false,
             data:"internal eror",
            message: error.message });
    }
}