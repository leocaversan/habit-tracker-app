import Habit from "../Models/Habit.js";


class HabitController {

    async getHabitsByUser(req, res) {
        const { userId } = req.body;
        try {
            const habits = await Habit.find({
                userId: userId
            });
            res.status(200).json(habits);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAllHabits(req, res) {

        try {
            const habits = await Habit.find({});
            res.status(200).json(habits);
        } catch (error) {
            res.status(401).json(error);
        }
    }
    async createHabit(req, res) {
        try {
            const { userId, habit, frequenciaHabit } = req.body;

            const habitExists = await Habit.findOne({
                habit: habit,
                userId: userId
            });
            if (habitExists) {
                return res.status(400).json({ message: "Habit already exists" });
            }
            Habit.init();
            const newHabit = new Habit({
                habit: habit,
                frequenciaHabit: frequenciaHabit,
                userId: userId,
            });

            newHabit.save();
            console.log(newHabit);
            res.status(201).json(newHabit);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteHabit(req, res) {
        const { habit, userId  } = req.body;

        try {
            const user = await Habit.findOne({
                habit: habit,
                userId: userId
            });
            console.log(user);
            
            if (user) {
                await user.remove();
                
                return res.status(204).json({
                    message: "Habit deleted",
                });
            }

        } catch(err){
            console.log(err);
            return res.status(500).json({
                message: "Error deleting habit",
            });
        
        }

    }

}

export default new HabitController;