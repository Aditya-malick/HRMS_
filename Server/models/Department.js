const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    dName: {
        type: String,
        require: true,
    },
    dId: {
        type: String,
        require: true, 
    },
    maneger: {
        type:String ,
    },
    description: {
        type: String,
        require: true
    }
},{timestamp: true})

module.exports = mongoose.model("Department" , departmentSchema);