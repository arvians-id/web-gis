module.exports = (app, passport) => {
  require('./loginRoutes')(app, passport);
  require('./registerRoutes')(app);
  require('./homeRoutes')(app);
  require('./districtRoutes')(app);
  require('./villageRoutes')(app);
  require('./dataPopulationRoutes')(app);
  require('./dataReligionRoutes')(app);
  require('./dataLivelihoodRoutes')(app);
  require('./dataLiveRoutes')(app);
  require('./dataWorshipRoutes')(app);
  require('./dataHealthRoutes')(app);
  require('./dataSchoolRoutes')(app);
}