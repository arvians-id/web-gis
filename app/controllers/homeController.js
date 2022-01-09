exports.index = (req, res) => {
    try {
        const data = {
            title: 'Dashboard',
            content: '../home/index'
        };
        res.render('layouts/homeLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}