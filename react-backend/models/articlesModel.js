// Model require Database connection
var sql = require('./db.js');

// Define an object constructor
var Articles = function (data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Articles.getAllArticles = function (result) {


    //Database query
    sql.query('SELECT * from articles', function (err, res, fields) {
        if (err) throw err;
        result(null, res);

    });


};

// Export Object to Controller
  module.exports = Articles;