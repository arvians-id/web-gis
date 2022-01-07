const Models = require('../../models');

exports.index = async (req, res) => {
    try {
        const districts = await Models.district.findAll();
        const data = {
            title: 'Data Kecamatan',
            content: '../district/index',
            districts
        };
        
        res.render('layouts/dataLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/districts');
    }
}

exports.create = (req, res) => {
    try {
        const data = {
            title: 'Buat Data Kecamatan',
            content: '../district/create'
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/districts/create');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.district.create({
            nama: req.body.nama,
            luas: req.body.luas,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            isActive: 0,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/districts/create');
    }
}

exports.edit = async (req, res) => {
    try {
        const district = await Models.district.findByPk(req.params.id)
        const data = {
            title: 'Ubah Data Kecamatan',
            content: '../district/edit',
            district
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect(`/districts/${req.params.id}/edit`);
    }
}

exports.update = async (req, res) => {
    try{
        await Models.district.update({
            nama: req.body.nama,
            luas: req.body.luas,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            isActive: 0,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect(`/districts/${req.params.id}/edit`);
    }
}

exports.destroy = async (req, res) => {
    try{
        await Models.district.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/districts/create');
    }
}

exports.active = async (req, res) => {
    try{
        const district = await Models.district.findByPk(req.params.id);
        const districts = await Models.district.findAll();
        districts.map(district => {
            district.update({
                isActive: 0
            })
        })
        district.update({
            isActive: 1
        })

        req.flash('success', 'Data status berhasil diubah!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect(`/districts`);
    }
}