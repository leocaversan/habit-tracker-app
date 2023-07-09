import bcrypt from 'bcryptjs';
import User from '../Models/User.js';

export const createPasswordHash = async (password) => {
    const salt = bcrypt.genSaltSync(8);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const verifyPassword = async (password, userPassword) => {
    
    if (!bcrypt.compareSync(password, userPassword)) {
        return false;
    } else {
        return true;
    }
};
