// Controller require model
var Articles = require('../models/articlesModel');

// Define and export a method to be used by the route
exports.display_All_Articles = function (req, res) {

    // Use a method defined in the Model
    
    Articles.getAllArticles(function (err, date) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};