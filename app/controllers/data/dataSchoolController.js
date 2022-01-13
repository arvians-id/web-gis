const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataSchools = await Models.data_school.findAll();
        const data = {
            title: 'Data Sekolah',
            content: '../data-school/index',
            dataSchools
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
            title: 'Buat Data Sekolah',
            content: '../data-school/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_school.create({
            marker: req.body.marker,
            sd: req.body.sd,
            mi: req.body.mi,
            smp: req.body.smp,
            mts: req.body.mts,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-schools');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataSchool = await Models.data_school.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Sekolah',
            content: '../data-school/edit',
            dataSchool,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_school.update({
            marker: req.body.marker,
            sd: req.body.sd,
            mi: req.body.mi,
            smp: req.body.smp,
            mts: req.body.mts,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-schools');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_school.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-schools');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}