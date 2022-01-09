const Models = require('../../models');

exports.index = async (req, res) => {
    try {
        const district = await Models.district.findOne({
            where: {
                isActive: 1
            },
            include: ['villages']
        })
        let content = '../home/noData';
        const geojson = [];
        const villages = [];
        if(district) {
            district.villages.map(village => {
                let filter = "/" + village.geojson.split('\\').slice(1,3).join("/")
                geojson.push(filter);
                villages.push([village.nama, village.warna, village.luas])
            })
            content = '../home/index';
        }
        
        const data = {
            title: 'Dashboard',
            content,
            district,
            geojson,
            villages: JSON.stringify(villages),
        };
        res.render('layouts/homeLayout', data);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}

exports.map = async (req, res) => {
    try {
        const district = await Models.district.findOne({
            where: {
                isActive: 1
            },
            include: ['villages']
        })
        const geojson = [];
        const villages = [];
        if(district) {
            district.villages.map(village => {
                let filter = "/" + village.geojson.split('\\').slice(1,3).join("/")
                geojson.push(filter);
                villages.push([village.nama, village.warna, village.luas])
            })

            const data = {
                title: 'Full Map',
                district,
                geojson,
                villages: JSON.stringify(villages),
            };
            res.render('home/map', data);
        }
        res.redirect('/');
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/failure');
    }
}