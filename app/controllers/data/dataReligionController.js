const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataReligions = await Models.data_religion.findAll();
        const data = {
            title: 'Data Agama',
            content: '../data-religion/index',
            dataReligions
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
            title: 'Buat Data Agama',
            content: '../data-religion/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_religion.create({
            marker: req.body.marker,
            islam: req.body.islam,
            budha: req.body.budha,
            hindu: req.body.hindu,
            katolik: req.body.katolik,
            protestan: req.body.protestan,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-religions');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataReligion = await Models.data_religion.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Agama',
            content: '../data-religion/edit',
            dataReligion,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_religion.update({
            marker: req.body.marker,
            islam: req.body.islam,
            budha: req.body.budha,
            hindu: req.body.hindu,
            katolik: req.body.katolik,
            protestan: req.body.protestan,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-religions');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_religion.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-religions');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.download = async (req, res) => {
    var file = __dirname + '../../../../public/crystal-report/Data_Agama.pdf';

    res.download(file)
}

exports.statistic = async (req, res) => {
    try {
        const dataReligions = await Models.data_religion.findAll();
        const data = {
            title: 'Statistik Data Agama',
            dataReligions: JSON.stringify(dataReligions),
        };

        res.render('data-religion/statistic', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}