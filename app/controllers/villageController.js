const Models = require('../../models');
const fs = require('fs');

exports.index = async (req, res) => {
    try {
        const villages = await Models.village.findAll({
            include: ['district']
        });
        const data = {
            title: 'Data Kelurahan',
            content: '../village/index',
            villages
        };
        
        res.render('layouts/dataLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/villages');
    }
}

exports.create = async (req, res) => {
    try {
        const districts = await Models.district.findAll();

        const data = {
            title: 'Buat Data Kelurahan',
            content: '../village/create',
            districts
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/villages/create');
    }
}

exports.store = async (req, res) => {
    try{
        await Models.village.create({
            districtId: req.body.districtId,
            nama: req.body.nama,
            luas: req.body.luas,
            warna: req.body.warna,
            geojson: req.file.path,
        });

        req.flash('success', 'Data berhasil ditambah!');
        res.redirect('/villages');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/villages/create');
    }
}

exports.edit = async (req, res) => {
    try {
        const village = await Models.village.findByPk(req.params.id);
        const districts = await Models.district.findAll();
        const data = {
            title: 'Ubah Data Kelurahan',
            content: '../village/edit',
            districts,
            village
        };

        res.render('layouts/inputLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect(`/villages/${req.params.id}/edit`);
    }
}

exports.update = async (req, res) => {
    try{
        await Models.village.update({
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
        res.redirect('/villages');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect(`/villages/${req.params.id}/edit`);
    }
}

exports.destroy = async (req, res) => {
    try{
        const village = await Models.village.findByPk(req.params.id);
        const path = village.geojson;

        fs.unlink(path, async (err) => {
            if (err) {
                req.flash('fail', err.message);
                return res.redirect('/villages');
            }

            await Models.village.destroy({
                where: {
                    id: req.params.id
                }
            });

            req.flash('success', 'Data berhasil dihapus!');
            res.redirect('/villages');
        })
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/villages');
    }
}