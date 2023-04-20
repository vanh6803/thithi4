const models = require('../models/user.model');
const fs = require('fs');

exports.list = async (req, res, next) => {
    let user = await models.Project.find().populate('work');
    res.render('index', { obj: user});
}

exports.add = async (req, res, next) => {
    let work = await models.Work.find();
    if(req.method == 'POST'){
        let obj = new models.Project();
        obj.work = req.body.work;
        obj.name = req.body.name;
        obj.description = req.body.description;
        obj.status = req.body.status;
        fs.renameSync(req.file.path, './public/images/' + req.file.originalname);
        obj.image = 'http://localhost:3000/images/' + req.file.originalname;
        try {
            let data = await obj.save();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    res.render('add', {work});
}

exports.edit = async (req, res, next) => {
    let id = req.params.id;
    let work = await models.Work.find();
    let user = await models.Project.findById({ _id: id });
    if(req.method == 'POST'){
        let obj = new models.Project();
        obj.work = req.body.work;
        obj.name = req.body.name;
        obj.description = req.body.description;
        obj.status = req.body.status;
        fs.renameSync(req.file.path, './public/images/' + req.file.originalname);
        obj.image = 'http://localhost:3000/images/' + req.file.originalname;
        try {
            let data = await obj.save();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    res.render('edit', { user: user , work: work});
}

exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        await models.Project.findByIdAndDelete({ _id: id});
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}

exports.addWork = async (req, res, next) => {
    if(req.method == "POST"){
        let obj = new models.Work();
        obj.name = req.body.name;
        try {
            let data = await obj.save();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    res.render('addWork');
}