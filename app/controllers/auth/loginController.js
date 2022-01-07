exports.index = (req, res) => {
    try{
        const data = { 
            title: 'Login',
            content: '../auth/login',
        }
        res.render('layouts/authLayout', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/login');
    }
}

exports.logout = (req, res) => {
    req.logout();
    req.session.destroy();

    res.redirect('/login');
}