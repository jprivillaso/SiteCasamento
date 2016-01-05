var express = require('express');
var router = express.Router();

var handleSayHello = function(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jprivillaso@hotmail.com', // Your email id
            pass: 'riv.8inheaven..' // Your password
        }
    });

    var text = 'Hello world from \n\n Juan';

    var mailOptions = {
        from: 'jprivillaso@hotmail.com', // sender address
        to: 'jprivillaso@gmail.com', // list of receivers
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