const ConfigDataBase = require('../config/db.config')
const db = new ConfigDataBase()
db.mongoDBConnect();

exports.getAllProjects = async () => {
    const response = db.getDb().collection('projects').find().toArray().then((items) => {
        return items;
    }).catch(err => console.error(`Failed to find documents: ${err}`));
    return response;
};

exports.getAllProjectsExperience = async () => {
    const response = db.getDb().collection('projects-experience').find().toArray().then((items) => {
        return items;
    }).catch(err => console.error(`Failed to find documents: ${err}`));
    return response;
};

