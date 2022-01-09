const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataPopulations = await Models.data_population.findAll();
        const data = {
            title: 'Data Punduduk',
            content: '../data-population/index',
            dataPopulations
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
            title: 'Buat Data Punduduk',
            content: '../data-population/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_population.create({
            marker: req.body.marker,
            laki_laki: req.body.laki_laki,
            perempuan: req.body.perempuan,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-populations');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataPopulation = await Models.data_population.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Punduduk',
            content: '../data-population/edit',
            dataPopulation,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_population.update({
            marker: req.body.marker,
            laki_laki: req.body.laki_laki,
            perempuan: req.body.perempuan,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-populations');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_population.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-populations');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}