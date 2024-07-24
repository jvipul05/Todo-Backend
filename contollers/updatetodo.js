
const mongoose = require('mongoose');
const todo = require('../models/todo');

exports.updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await todo.findByIdAndUpdate({_id:req.params.id},{title,description});
        res.status(200).json(
            {   success: true,
                message: 'Todo updated successfully',
                data: response });
    }
    catch (error) {
        res.status(500).json({ 
             success: false,
             data:"internal eror",
            message: error.message });
    }
}