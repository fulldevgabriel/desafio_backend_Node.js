const jwt = require('jsonwebtoken');
const db = require('../models/db');
require('dotenv').config();

console.log(process.env.SECRET_KEY)
// Ou utilize no terminal node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
const SECRET_KEY = process.env.SECRET_KEY;

exports.loginController = (req, res) => {
    const { userEmail, userPass } = req.body;

    try {
        const user = db.find(user => user.userEmail === userEmail);

        if (!user || user.userPass !== userPass) {
            return res.status(400).send({ message: "Usuario ou senha incorretos!" });
        }

        const token = jwt.sign({ email: user.userEmail, id: user.id }, SECRET_KEY, { expiresIn: "2m" })

        res.status(200).send({ message: "login efetuado com sucesso!", token: `${token}` });
    } catch (err) {
        return res.status(403).send({ message: `Error interno ${err}` });
    }

}