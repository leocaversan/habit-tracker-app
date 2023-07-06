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
                unique: true
            }
        },
        userId:{
            type:String,
            required:true,
        }

        
    },{
        timestamps:true,
    }
);

export default mongoose.model('Habit',habitSchema);