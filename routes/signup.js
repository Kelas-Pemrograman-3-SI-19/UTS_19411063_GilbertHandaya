const router = require('express').Router()
const signupController = require('../controller/signup')

router.post('/insert', (req, res) => {
    signupController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    signupController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    signupController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router