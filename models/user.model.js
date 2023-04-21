const db = require('./db');


const projectSchema = new db.mongoose.Schema(
    {
        id_work: {type:db.mongoose.Schema.ObjectId, ref: 'Work'},
        name: {type: String, required: true},
        description: {type: String, required: true},
        status: {type: String, required: false},
        image: {type: String, required: false}
    }
)
const workSchema = new db.mongoose.Schema(
    {
        name: {type: String, required: true}
    }
)


const Work = db.mongoose.model('Work', workSchema);
const Project = db.mongoose.model('Project', projectSchema);

module.exports = {
    Work,
    Project
}