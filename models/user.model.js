const db = require('./db');

const workSchema = new db.mongoose.Schema(
    {
        name: {type: String, required: true}
    }
)

const projectSchema = new db.mongoose.Schema(
    {
        id: {type: String, required: true},
        work: {type: db.mongoose.Schema.Types.ObjectId, ref: 'Work', required: true},
        name: {type: String, required: true},
        description: {type: String, required: true},
        status: {type: String, required: true},
        image: {type: String, required: true}
    }
)

const Work = db.mongoose.model('Work', workSchema);
const Project = db.mongoose.model('Project', projectSchema);

module.exports = {
    Work,
    Project
}