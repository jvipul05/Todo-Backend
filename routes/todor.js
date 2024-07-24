const express = require('express');

const router = express.Router();

const {createtodo} = require('../contollers/createtodo');

router.post('/createtodo', createtodo);

const {deletetodo} = require('../contollers/deletetodo');
router.delete('/deletetodo/:id',deletetodo);

const {updateTodo} = require('../contollers/updatetodo');
router.put('/updatetodo/:id',updateTodo);

const {showTodo} = require('../contollers/showtodo');
router.get('/showtodo',showTodo);

module.exports = router;

