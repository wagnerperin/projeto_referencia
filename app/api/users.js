module.exports = app => {
    const userModel = require('mongoose').model('User');

    const api = {};

    api.create = (req, res) => {
        userModel
            .create(req.body)
            .then(user => {
                res.status(201).json(user);
            });

    }

    api.list = (req, res) => {
        userModel
            .find({})
            .then(users => { res.json(users) });
    }

    api.update = (req, res) => {
        userModel
            .findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
            .then(user => {
                res.json(user);
            });
    }

    api.remove = (req, res) => {
        userModel
            .findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, user) => {
            if (err) return res.status(500).send(err);
            return res.sendStatus(204);
        });
        
    }


    return api;
}