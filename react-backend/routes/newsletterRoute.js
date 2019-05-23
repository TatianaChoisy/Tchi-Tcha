
// Route Require Controller
var newsletter_controller = require('../controllers/newsletterController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.post('/', newsletter_controller.insert_a_newsletter_mail);


// Export Router to app.js
module.exports = router;