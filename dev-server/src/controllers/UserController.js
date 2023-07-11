import User from '../Models/User.js';
import { createPasswordHash, verifyPassword } from '../service/auth.js';


class UsersController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne(
                {
                    "username": username
                });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const isPasswordValid = await verifyPassword(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password" });
            }

            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internet server error." });
        }
    }
    async index(req, res) {
        try {
            const users = await User.find({})

            return res.json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internet server error." });
        }

    }
    async show(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const users = await User.findById(id);

            if (!users) {
                console.log(users)
                return res.status(404).json()
            }
            return res.json(users);
        }

        catch (err) {
            console.log(err);
            return res.status(404).json({ error: "Internet server error." });
        }
    }
    async create(req, res) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });

            if (user) {
                console.log(user);
                return res.status(402).
                    json({ message: `User ${username} already exists` });
            }
            const encryptedPassword = await createPasswordHash(password);
            //error
            User.init();
            const newUser = new User({
                username: username,
                password: encryptedPassword,
            });

            // await User.updateMany({ username: null }, { $set: { userName: 'valor_unico_aqui' } });
            try {
                newUser.save();
                console.log(newUser);
            } catch (err) { console.log(err); }
            // const newUser = await User.create({ username, password });
            // error aqui
            return res.status(201).json(newUser); //201  -> codigo de usuario criado com sucesso.

        } catch (error) {

        }
    }
    async update(req, res) {

        const { id } = req.params;
        const { username, password } = req.body;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ status: 404, message: 'User Not Found' });
        }
        try {
            const encryptedPassword = await createPasswordHash(password);
            user.username = username;
            user.password = encryptedPassword;
            await user.save();

            return res.status(200).json({ status: 200, user });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ status: 500, message: `Internal Server Error` });
        }
    }
    async destroy(req, res) {
        const { id } = req.params;
        const user = await User.findById(id);

        if (user) {
            await user.remove();
            return res.json({ message: "User Deleted" });
        }
        return res.status(404).json({ status: 404, message: "Error" })


    }
}

export default new UsersController;