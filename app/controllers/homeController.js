const Models = require('../../models');

exports.index = async (req, res) => {
    try {
        let content = '../home/noData';

        // District
        const geojson = [];
        const villages = [];
        const district = await Models.district.findOne({
            where: {
                isActive: 1
            },
            include: ['villages']
        })
        if(district) {
            district.villages.map(async (village) => {
                let filter = "/" + village.geojson.split('\\').slice(1,3).join("/")
                geojson.push(filter);
                villages.push([village.nama, village.warna, village.luas]);
            })
            content = '../home/index';
        }

        // Data Popoulation
        const dataPopulations = await Models.data_population.findAll()
        const populations = dataPopulations.map(dataPopulation => dataPopulation.dataValues)

        // Rendering
        const data = {
            title: 'Dashboard',
            content,
            district,
            geojson,
            populations: JSON.stringify(populations),
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