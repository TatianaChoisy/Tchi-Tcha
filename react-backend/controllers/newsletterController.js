
// Controller Require Model
var NewsletterEmail = require('../models/newsletterModel.js');


// Define and export a method to be used by the Route
exports.insert_a_newsletter_mail = function (req, res) {
    var new_email = new NewsletterEmail(req.body);
    console.log(new NewsletterEmail(req.body));

    // Use a method defined in the Model
    NewsletterEmail.postAMail(new_email,function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
