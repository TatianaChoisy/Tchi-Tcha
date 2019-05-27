// Route Require Controller
var articles_controller = require('../controllers/articlesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', articles_controller.display_All_Articles);


// Export Router to app.js
module.exports = router;
