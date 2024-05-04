const express = require('express');
const router = express.Router();
const appointmentController = require("../controller/appointment_controller")


router.post('/create', appointmentController.bookAppointment);

module.exports = router;