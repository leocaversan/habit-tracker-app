import  jwt  from "jsonwebtoken";

import User from "../Models/User.js";
import { verifyPassword } from "../service/auth.js";
import authConfig from "../config/authConfig.js";

class SessionController {

    async create(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json(
                { 
                    message: "Usuário não encontrado" 
                });
        }

        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json(
                { 
                    message: "Senha inválida" 
                });
        }

        const token = jwt.sign({ id: user._id }, authConfig.secret, { expiresIn: authConfig.expiresIn });

        return res.status(200).json(
            { 
                user:{
                    id: user._id,
                    username: user.username
                },
                token: token
             });
    }

}

export default new SessionController;