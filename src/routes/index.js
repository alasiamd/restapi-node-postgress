const { Router } = require('express');
const router = Router();

const { getUsers, postUsers, getUserById, deleteUser, putUser} = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', putUser)

module.exports = router;