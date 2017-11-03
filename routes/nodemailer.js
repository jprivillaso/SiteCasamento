var express = require('express');
var router = express.Router();

var handleSayHello = function(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'email', // Your email id
            pass: 'passwrd' // Your password
        }
    });

    var text = 'Hello world from \n\n Juan';

    var mailOptions = {
        from: 'email', // sender address
        to: 'email', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){

        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };

    });

};

router.post('/unsecureApi/sendEmail', handleSayHello);

module.exports = router;
