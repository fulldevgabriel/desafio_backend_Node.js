const db = require('../models/db');

exports.getUsuariosController = (req, res) => {
    res.status(200).send({ "users": db });
}