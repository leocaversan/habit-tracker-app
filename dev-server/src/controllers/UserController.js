import User from '../Models/User.js';

class UsersController {
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

    }
    async create(req, res) {
        try {
            console.log(req.body);
            const { username, password } = req.body;
            console.log(username);
            console.log(password);
            
            const user = await User.findOne({ username });

            if (user) {
                console.log(user);
                return res.status(402).
                    json({ message: `User ${username} already exists` });
            }
                //error
                User.init();
                const newUser = new User({
                    username: username,
                    password: password,
                });

                await User.updateMany({ username: null }, { $set: { userName: 'valor_unico_aqui' } });
                try {
                    newUser.save();
                    console.log(newUser);
                }   catch (err) {console.log(err);}
                // const newUser = await User.create({ username, password });
                // error aqui
                return res.status(201).json(newUser); //201  -> codigo de usuario criado com sucesso.
            
        } catch (error) {

        }
    }
    async update(req, res) {

    }
    async destroy(req, res) {

    }
}

export default new UsersController;