const Models = require('../../../models');

exports.index = async (req, res) => {
    try {
        const dataLivelihoods = await Models.data_livelihood.findAll();
        const data = {
            title: 'Data Mata Pencaharian',
            content: '../data-livelihood/index',
            dataLivelihoods
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
            title: 'Buat Data Mata Pencaharian',
            content: '../data-livelihood/create',
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.data_livelihood.create({
            marker: req.body.marker,
            pns: req.body.pns,
            bumn: req.body.bumn,
            tni: req.body.tni,
            polisi: req.body.polisi,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/data-livelihoods');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.edit = async (req, res) => {
    try {
        const dataLivelihood = await Models.data_livelihood.findByPk(req.params.id);
        const data = {
            title: 'Ubah Data Mata Pencaharian',
            content: '../data-livelihood/edit',
            dataLivelihood,
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.data_livelihood.update({
            marker: req.body.marker,
            pns: req.body.pns,
            bumn: req.body.bumn,
            tni: req.body.tni,
            polisi: req.body.polisi,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/data-livelihoods');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.data_livelihood.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/data-livelihoods');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.download = async (req, res) => {
    var file = __dirname + '../../../../public/crystal-report/Data_Mata_Pencaharian.pdf';

    res.download(file)
}