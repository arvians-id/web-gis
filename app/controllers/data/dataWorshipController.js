const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataWorships = await Models.data_worship.findAll();
        const data = {
            title: 'Data Peribadahan',
            content: '../data-worship/index',
            dataWorships
        };
        
        res.render('layouts/dataLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.create = async (req, res) => {
    try {
        const data = {
            title: 'Buat Data Peribadahan',
            content: '../data-worship/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_worship.create({
            marker: req.body.marker,
            islam: req.body.islam,
            gereja: req.body.gereja,
            pura: req.body.pura,
            vihara: req.body.vihara,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-worships');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataWorship = await Models.data_worship.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Peribadahan',
            content: '../data-worship/edit',
            dataWorship,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_worship.update({
            marker: req.body.marker,
            islam: req.body.islam,
            gereja: req.body.gereja,
            pura: req.body.pura,
            vihara: req.body.vihara,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-worships');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_worship.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-worships');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}