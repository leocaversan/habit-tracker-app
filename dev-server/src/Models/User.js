import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            index: {
                unique: true
            }
        },
        password:{
            type:String,
            required:true,
            index: {
                unique: false
            }
        },
        
    },{
        timestamps:true,
        _id:true
    }
);

const User = mongoose.model('User',userSchema);
// export default mongoose.model('User',userSchema, 'usuarios');
export default User;