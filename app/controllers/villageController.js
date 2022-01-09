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
        res.redirect('/failure');
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
        res.redirect('/failure');
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
        res.redirect('/failure');
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
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        const village = await Models.village.findByPk(req.params.id);

        if(req.file){
            const path = village.geojson;
            fs.unlink(path, async (err) => {
                if(err) {
                    req.flash('fail', err.message + '. But success updated');
                    res.redirect('/failure');
                }
            })
        }
        
        await Models.village.update({
            districtId: req.body.districtId,
            nama: req.body.nama,
            luas: req.body.luas,
            warna: req.body.warna,
            geojson: req.file ? req.file.path : village.geojson,
        },{
            where: {
                id: req.params.id
            }
        });
        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/villages');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        const village = await Models.village.findByPk(req.params.id);
        const path = village.geojson;

        fs.unlink(path, async (err) => {
            if (err) {
                req.flash('fail', err.message + '. But success deleted');
                res.redirect('/failure');
            }
        })
        
        await Models.village.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/villages');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}