'use strict'
const Project = require('../models/project');
const fs = require('fs');
const path = require('path');
const controller = {
    home: function (req, res){
        return res.status(200).send(
            {
                message: 'Soy la Home',
            }
        );
    },
    test: function (req, res){
        return res.status(200).send({
            message: 'Soy la Test',
        });

    },
    saveProject: function (req, res){
        let project = new Project();
        const params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs= params.langs;
        project.image= null;

        project.save((err, projectStored) => {
           if(err){
               return res.status(500).send({
                   message: 'Error en la petición',
                   error: err,
               });
           }
           if(!projectStored){
               return res.status(404).send({
                   message: 'No se ha podido guardar el proyecto'
               });
           }
           return res.status(200).send({project: projectStored, message: 'Project Guardado'});
        });
    },
    getProject: function (req, res){
        const projectId = req.params.id;
        if(projectId == null){
            return res.status(404).send({
                message: 'El documento no existe',
            });
        }
        Project.findById(projectId, (err, project)=>{
           if(err){
               return res.status(500).send({
                   message: 'Error al devolver los datos',
                   err: err,
               });
           }
           if(!project){
               return res.status(404).send({
                   message: 'El documento no existe',
               });
           }
           return res.status(200).send({
               project: project
           });
        });
    },
    getProjects: function(req,res){
        Project.find().exec((err,projects) =>{
            if(err){
                res.status(500).send({
                    message: 'Error al devolver los datos'
                });
            }
            if(!projects){
                res.status(404).send({
                    message: 'No existen proyectos',
                });
            }
            return res.status(200).send({
                projects: projects
            });
        });
    },
    updateProject: function(req, res){
        const projectId = req.params.id;
        const update = req.body;
        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) => {
            if(err){
                return res.status(500).send({
                    message: 'Error al actualizar',
                    err: err
                });
            }
            if(!projectUpdated){
                return res.status(404).send({
                    message: 'No existe el proyecto'
                });
            }
            return res.status(200).send({
                project: projectUpdated
            });
        });
    },
    deleteProject: function(req, res){
        const projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectDeleted) => {
            if(err){
                return res.status(500).send({
                    message: 'Error al borrar el proyecto',
                    err: err
                });
            }
            if(!projectDeleted){
                return res.status(404).send({
                    message: 'No existe el proyecto'
                });
            }
            return res.status(200).send({
                project: projectDeleted
            });
        });
    },

    uploadImage: function (req,res){
        const projectId = req.params.id;
        if(req.files){
            const image= req.files.image;
            const filePath = image.path;
            const fileSplit = filePath.split('/');
            const fileName = fileSplit[1];
            const extSplit = fileName.split('.');
            const ext =  extSplit[1];
            if(ext === 'jpeg' || ext === 'png' || ext === 'jpg' || ext === 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, (err,projectUpdated) =>{
                    if(err){
                        return res.status(500).send({
                            message: 'Error al actualizar',
                            err: err
                        });
                    }
                    if(!projectUpdated){
                        return res.status(404).send({
                            message: 'No existe el proyecto'
                        });
                    }
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });

            }
            else {
                fs.unlink(filePath, (err) => {
                   return res.status(200).send({message: err});
                });
            }
            return res.status(200).send({
                files: fileName
            });
        }
        else{
            return res.status(200).send({
                message: 'No se han subido imagenes',
            });
        }
    },
    getImageFile: function (req, res){
        const file = req.params.image;
        const path_file = './uploads/'+file;
        fs.exists(path_file, (exists => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
            else {
                return res.status(404).send(
                    { message: 'No existe la imagen'}
                );
            }
        }));
    }
};
module.exports = controller;