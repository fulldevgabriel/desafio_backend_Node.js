const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

exports.authToken = (req, res, next) => {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).send({ message: "Error token não fornecido" });
    }

    try{
        const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY)
        req.user = decoded;
        next();
    } catch(err){
        res.status(400).send({ message: "Token inválido ou expirado", err });
    }

}