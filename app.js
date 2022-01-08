require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const initializePassport = require('./config/passport');
initializePassport(passport);

const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000) 
    }
  }),
);
app.use(cookieParser());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(csrf({ cookie: true }));
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.locals.csrfToken = req.csrfToken();
  res.locals.old = req.flash('old')[0] || '';
  res.locals.messages = req.flash();
  res.locals.user = req.user;
  res.locals.currentUrl = (req.protocol + '://' + req.get('host') + req.originalUrl).split('/').splice(2, 2);
  
  next();
})

// Routes
require('./routes')(app, passport);
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.messageSystem = err.message;
  res.locals.errorSystem = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('errors/error');
});

module.exports = app;
