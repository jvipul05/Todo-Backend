const mongoose = require('mongoose');
const todo = require('../models/todo');


exports.deletetodo = async (req, res) => { 
    try {
       
        const response = await todo.findByIdAndDelete({_id:req.params.id});
        res.status(200).json(
            {   success: true,
                message: 'Todo deleted successfully',
                data: response });
    } catch (error) {
        res.status(500).json({ 
             success: false,
             data:"internal eror",
            message: error.message });
    }
}
