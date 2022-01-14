const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataHealths = await Models.data_health.findAll();
        const data = {
            title: 'Data Sarana Kesehatan',
            content: '../data-health/index',
            dataHealths
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
            title: 'Buat Data Sarana Kesehatan',
            content: '../data-health/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_health.create({
            marker: req.body.marker,
            rumah_sakit: req.body.rumah_sakit,
            rumah_sakit_bersalin: req.body.rumah_sakit_bersalin,
            poliklinik: req.body.poliklinik,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-healths');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataHealth = await Models.data_health.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Sarana Kesehatan',
            content: '../data-health/edit',
            dataHealth,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_health.update({
            marker: req.body.marker,
            rumah_sakit: req.body.rumah_sakit,
            rumah_sakit_bersalin: req.body.rumah_sakit_bersalin,
            poliklinik: req.body.poliklinik,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-healths');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_health.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-healths');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.download = async (req, res) => {
    var file = __dirname + '../../../../public/crystal-report/Data_Sarana_Kesehatan.pdf';

    res.download(file)
}

exports.statistic = async (req, res) => {
    try {
        const dataHealths = await Models.data_health.findAll();
        const data = {
            title: 'Statistik Data Sarana Kesehatan',
            dataHealths: JSON.stringify(dataHealths),
        };

        res.render('data-health/statistic', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}