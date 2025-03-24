const db = require('../models/db');

exports.loginController = (req, res) => {
    const { userEmail, userPass } = req.body;

    try {
        const user = db.find(user => user.userEmail === userEmail);

        if (!user || user.userPass !== userPass) {
            return res.status(400).send({ message: "Usuario ou senha incorretos!" });
        }

        res.status(200).send({ message: "login efetuado com sucesso!" });
    } catch (err) {
        return (500).send({ message: `Error interno ${err}` });
    }

}