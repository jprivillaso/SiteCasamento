// Required scripts
var express       = require('express');
var path          = require('path');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var nodemailer    = require('nodemailer');

var HTTP_STATUS_OK = 202;
var HTTP_STATUS_CREATED = 201;

// Routes
var homeRoute = require('./routes/index');

// Mongoose Schema definition
Schema = new mongoose.Schema({  
    id       : Number, 
    name     : String,
    content  : String,
    date     : Number
});

SchemaGuest = new mongoose.Schema({
    id    : Number,
    count : Number
});

mongoose.connect(process.env.PROD_MONGODB, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Database Instance
Comment = mongoose.model('comments', Schema);
Guest   = mongoose.model('guests', SchemaGuest);

/* GET home page */
app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET Comments */
app.get('/comments', function(req, res, next) {

    Comment.find({}).sort({date: -1}).exec( function ( err, comments ){
      res.status(HTTP_STATUS_OK).json(comments);
    });

});

/* POST Comments */
app.post('/comments', function(req, res, next) {

    var newComment = new Comment(req.body);
    newComment.save(function (err) {
        if (err) return console.error(err);
        res.status(HTTP_STATUS_CREATED).json(req.body);
    });

});

app.get('/getGuestNumber', function(req, res, next) {

    Guest.find({id: 1}, function(err, guest){
        res.status(HTTP_STATUS_OK).json(guest);
    });

});

app.post('/increaseGuest', function(req, res, next) {

    Guest.update({id: "1"}, { $inc: { "count":1 } }, function(err, data){
        res.status(HTTP_STATUS_OK).json(data);
    });
});

var handleSayHello = function(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'sitesjprivillaso@outlook.com', // Your email id
            pass: 'beRich2016' // Your password
        }
    });

    var name = req.body.name;
    var email = req.body.email;

    var text = 'Olá Casal! \n\n ' + name + ' acaba de confirmar a presença para o Casamento! \n\n';
    text    += ' Se quiserem dar um retorno, podem escrever no email ' + email;

    var mailOptions = {
        from: 'sitesjprivillaso@outlook.com',
        to: 'marcinhadefaria@hotmail.com',
        subject: name + ' confirmou a assitência!',
        text: text
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

app.post('/unsecureApi/sendEmail', handleSayHello);

module.exports = app;