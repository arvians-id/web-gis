const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataLives = await Models.data_live.findAll();
        const data = {
            title: 'Data Penduduk Hidup',
            content: '../data-live/index',
            dataLives
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
            title: 'Buat Data Penduduk Hidup',
            content: '../data-live/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_live.create({
            marker: req.body.marker,
            lahir: req.body.lahir,
            mati: req.body.mati,
            datang: req.body.datang,
            pindah: req.body.pindah,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-lives');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataLive = await Models.data_live.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Penduduk Hidup',
            content: '../data-live/edit',
            dataLive,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_live.update({
            marker: req.body.marker,
            lahir: req.body.lahir,
            mati: req.body.mati,
            datang: req.body.datang,
            pindah: req.body.pindah,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-lives');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_live.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-lives');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.download = async (req, res) => {
    var file = __dirname + '../../../../public/crystal-report/Data_Penduduk_LMDP.pdf';

    res.download(file)
}

exports.statistic = async (req, res) => {
    try {
        const dataLives = await Models.data_live.findAll();
        const data = {
            title: 'Statistik Data Punduduk Hidup',
            dataLives: JSON.stringify(dataLives),
        };

        res.render('data-live/statistic', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}