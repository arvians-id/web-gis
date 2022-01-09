module.exports = (app, passport) => {
  require('./loginRoutes')(app, passport);
  require('./registerRoutes')(app);
  require('./homeRoutes')(app);
  require('./districtRoutes')(app);
  require('./villageRoutes')(app);
  require('./dataPopulationRoutes')(app);
}