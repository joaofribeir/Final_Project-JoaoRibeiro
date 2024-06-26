const router = require('express').Router();
const appController = require('../controllers/clientController');

router.get('/', appController.getAllClients);
router.get('/:id', appController.getClientByID);
router.post('/register', appController.postNewClient);
router.post('/login', appController.postClientLogin);
router.put('/:id', appController.editClient);
router.put('/updatePassword/:id', appController.editPassword);
router.delete('/:id', appController.deleteClient);

module.exports = router;
