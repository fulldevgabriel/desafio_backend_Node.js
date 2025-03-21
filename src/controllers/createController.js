const db = require('../models/db.js')

exports.createUser = (req, res) => {
    const { userName, userEmail, userPass, confirmPass } = req.body;

    db.push( {userName, userEmail, userPass, confirmPass} );
    console.log(db);
    res.status(201).send({ "message": "usuario criado com sucesso" });

}