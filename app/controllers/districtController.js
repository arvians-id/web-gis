const Models = require('../../models');
const fs = require('fs');

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
        res.redirect('/failure');
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
        res.redirect('/failure');
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
        res.redirect('/failure');
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
        res.redirect('/failure');
    }
}

exports.update = async (req, res) => {
    try{
        await Models.district.update({
            nama: req.body.nama,
            luas: req.body.luas,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },{
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil diubah!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.destroy = async (req, res) => {
    try{
        const district = await Models.district.findOne({
            where: {
                id: req.params.id
            },
            include: ['villages']
        });
        if(district){
            const paths = district.villages;
            paths.map(path => {
                fs.unlink(path.geojson, async (err) => {
                    if (err) {
                        req.flash('fail', err.message + '. But success deleted');
                        res.redirect('/failure');
                    }
                })
            })
        }

        await Models.district.destroy({
            where: {
                id: req.params.id
            }
        });

        req.flash('success', 'Data berhasil dihapus!');
        res.redirect('/districts');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
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
        res.redirect('/failure');
    }
}