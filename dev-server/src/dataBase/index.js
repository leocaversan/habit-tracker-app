import mongoose from 'mongoose';
import config from '../config/dataBase.js';

class dataBase {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
            );
        
    }
}
export default new dataBase;