const signupModel = require ('../model/signup')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        signupModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input signup'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input signup'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        signupModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        signupModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })