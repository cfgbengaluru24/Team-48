const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/', queryController.createQuery);

router.get('/all', queryController.getAllQueries);

router.get('/:id', queryController.getQueryById);

router.put('/:id', queryController.updateQueryById);


router.delete('/:id', queryController.deleteQueryById);

module.exports = router;

