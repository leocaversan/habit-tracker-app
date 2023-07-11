import mongoose from "mongoose";

const habitSchema = mongoose.Schema(
    {
        habit:{
            type:String,
            required:true,
            index: {
                unique: false
            }
        },
        frequenciaHabit:{
            type:String,
            required:true,
            index: {
                unique: false
            }
        },
        userId:{
            type:String,
            required:true,
        }
        
    },{
        timestamps:true,
        id:true,
    }
);

export default mongoose.model('Habit',habitSchema);