const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-controller')

router.route('/contact').post(contactForm);
console.log("control is here in contact-router.js");


module.exports = router;