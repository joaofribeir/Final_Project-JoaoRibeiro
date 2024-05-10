const router = require('express').Router();
const appController = require('../controllers/bookingController');

router.get('/', appController.getAllBookings);
router.get('/:id', appController.getBookingByID);
router.get('/client/:id', appController.getBookingWithClientID);
router.post('/', appController.addNewBooking);
router.put('/:id', appController.editBooking);
router.delete('/:id', appController.deleteBooking);

module.exports = router;
