const localStrategy =  require('passport-local').Strategy;
const { user } = require('../models');
const bcrypt = require('bcrypt');

module.exports = passport => {
    passport.use(new localStrategy(async (username, password, done) => {
        try{
            const users = await user.findOne({
                where: {
                    username: username
                }
            });
            if(users == null)
                return done(null, false, { 
                    message: 'Users not found.' 
                });
            
            const comparePassword = await bcrypt.compare(password, users.password);
            if(!comparePassword)
                return done(null, false, { 
                    message: 'Incorrect username or password.' 
                });
    
            return done(null, users);
        }catch(e){
            return done(e)
        }
    }));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        try{
            const users = await user.findByPk(id);
            return done(null, users);
        }catch(e){
            return done(e)
        }
    });
};