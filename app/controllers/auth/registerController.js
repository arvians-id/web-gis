const Models = require('../../../models'); 
const bcrypt = require('bcrypt');

exports.index = (req, res) => {
    try{
        const data = { 
            title: 'Registrasi',
            content: '../auth/register',
        }

        res.render('layouts/authLayout', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.register = async (req, res) => {
    try{
        const password = await bcrypt.hash(req.body.password, 10);
        
        await Models.user.create({
            name: req.body.name,
            username: req.body.username,
            password: password,
        });

        req.flash('success', 'Data successfuly added, you can login now!');
        res.redirect('/login');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/register');
    }
}