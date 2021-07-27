const sql = require("../db/connection");
const { QueryTypes } = require("sequelize");

exports.createUser= async (req, res) => {
    try {
        const user = [
            req.body.user,
            req.body.email,
            req.body.pass
        ];
        const text = "INSERT INTO movieusers(username, email, password) VALUES(:userDetails) RETURNING *"
        await sql.query(text, {
            replacements: { userDetails: user },
            type: QueryTypes.INSERT,
        });
        
        res.status(200).send({ message: "User created" });
    } catch (error) {
        res.status(500).send({ message: "Create user unsuccesful" })
    }
};

exports.getOneUser = (req, res) => {
    try {
        const user = {
            user: req.params.username
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ message: "User not found" })
    }
}
