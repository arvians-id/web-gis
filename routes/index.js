module.exports = (app, passport) => {
  require('./homeRoutes')(app);
  require('./loginRoutes')(app, passport);
  require('./registerRoutes')(app);
}