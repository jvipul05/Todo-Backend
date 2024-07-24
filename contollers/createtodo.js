const todo = require('../models/todo');

exports.createtodo = async (req, res) => {
    
    try {
        const { title, description } = req.body;
        const response = await todo.create({ title , description });
        res.status(200).json(
            {   success: true,
                message: 'Todo created successfully',
                data: response });
    } catch (error) {
        res.status(500).json({ 
             success: false,
             data:"internal eror",
            message: error.message });
    }
}