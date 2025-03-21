const db = require('../models/db.js');

exports.createMiddleware = (req, res, next) => {
    const { userEmail, userPass, confirmPass } = req.body

    if(userPass !== confirmPass){
        return res.status(400).send({ message: "senha não confere" });
    }

    const emailExists = db.some(user => user.userEmail === userEmail);

    if(emailExists){
        return res.status(400).send({ message: "Error email ja cadastrado" })
    }

    next();
}