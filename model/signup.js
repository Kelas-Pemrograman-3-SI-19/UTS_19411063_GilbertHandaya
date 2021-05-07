const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const SignupSchema = new Schema({

    nama: {
        type : String
    },

    npm: {
        type : String
    },

    prodi:{
        type : String
    },

    emailstudents: {
        type : String
    }
})

module.exports = mongoose.model('Signup', SignupSchema)