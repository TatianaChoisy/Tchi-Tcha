// Model require Database connection
var sql = require('./db.js');


// Define an Object constructor
var NewsletterEmail = function(data) {
    this.email = data.email;
}

// Define Object method to be used by a Controller
NewsletterEmail.postAMail = function (newemail, result) {
  var newemails = Object.values(newemail);
   var table = [
     [ newemails[0] ]
    ];
   console.log(table);

    // Database query
    var query = 'INSERT INTO newsletter (newsletter_email) VALUES ?'
    
  sql.query(query, [table],function (err, res, fields) {
      if (err) throw err;
        result(null, res);
  }); 
};
// Export Object to Controller
module.exports = NewsletterEmail;