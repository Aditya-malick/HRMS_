const mongoose = require('mongoose')

const AnnouncementsSchema = mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    massage: {
        type:String,
        require:true
    },
    targate: {
        type:String,
        enum:["Manager","Employee","All"],
        require:true
    },
    date:{ 
        type:Date,
        default:Date.now()
    }
},{timestamps : true})

module.exports = mongoose.model('Announcements' , AnnouncementsSchema )