const Models = require('../../models');

const viewRender = () => {
    
}
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
        const dataPopulations = await Models.data_population.findAll();
        const populations = dataPopulations.map(dataPopulation => dataPopulation.dataValues);

        // Data Religion
        const dataReligions = await Models.data_religion.findAll();
        const religions = dataReligions.map(dataReligion => dataReligion.dataValues);

        // Data Livelihood
        const dataLivelihoods = await Models.data_livelihood.findAll();
        const livelihoods = dataLivelihoods.map(dataLivelihood => dataLivelihood.dataValues);

        // Data Live
        const dataLives = await Models.data_live.findAll();
        const lives = dataLives.map(dataLive => dataLive.dataValues);

        // Data Worship
        const dataWorships = await Models.data_worship.findAll();
        const worships = dataWorships.map(dataWorship => dataWorship.dataValues);

        // Data Healt
        const dataHealths = await Models.data_health.findAll();
        const healths = dataHealths.map(dataHealth => dataHealth.dataValues);

        // Data School
        const dataSchools = await Models.data_school.findAll();
        const schools = dataSchools.map(dataSchool => dataSchool.dataValues);

        // Rendering
        const data = {
            title: 'Dashboard',
            content,
            district,
            geojson,
            populations: JSON.stringify(populations),
            religions: JSON.stringify(religions),
            livelihoods: JSON.stringify(livelihoods),
            lives: JSON.stringify(lives),
            worships: JSON.stringify(worships),
            healths: JSON.stringify(healths),
            schools: JSON.stringify(schools),
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
        const geojson = [];
        const villages = [];
        const district = await Models.district.findOne({
            where: {
                isActive: 1
            },
            include: ['villages']
        })

        if(district) {
            district.villages.map(village => {
                let filter = "/" + village.geojson.split('\\').slice(1,3).join("/")
                geojson.push(filter);
                villages.push([village.nama, village.warna, village.luas])
            })

            // Data Popoulation
            const dataPopulations = await Models.data_population.findAll();
            const populations = dataPopulations.map(dataPopulation => dataPopulation.dataValues);
    
            // Data Religion
            const dataReligions = await Models.data_religion.findAll();
            const religions = dataReligions.map(dataReligion => dataReligion.dataValues);
    
            // Data Livelihood
            const dataLivelihoods = await Models.data_livelihood.findAll();
            const livelihoods = dataLivelihoods.map(dataLivelihood => dataLivelihood.dataValues);
    
            // Data Live
            const dataLives = await Models.data_live.findAll();
            const lives = dataLives.map(dataLive => dataLive.dataValues);
    
            // Data Worship
            const dataWorships = await Models.data_worship.findAll();
            const worships = dataWorships.map(dataWorship => dataWorship.dataValues);
    
            // Data Healt
            const dataHealths = await Models.data_health.findAll();
            const healths = dataHealths.map(dataHealth => dataHealth.dataValues);
    
            // Data School
            const dataSchools = await Models.data_school.findAll();
            const schools = dataSchools.map(dataSchool => dataSchool.dataValues);
    
            // Rendering
            const data = {
                title: 'Full Map',
                district,
                geojson,
                populations: JSON.stringify(populations),
                religions: JSON.stringify(religions),
                livelihoods: JSON.stringify(livelihoods),
                lives: JSON.stringify(lives),
                worships: JSON.stringify(worships),
                healths: JSON.stringify(healths),
                schools: JSON.stringify(schools),
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