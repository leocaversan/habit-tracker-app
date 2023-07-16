import axios from 'axios';

interface habitSchema {
    habit: string,
    frequenciaHabit: string,
    userId: string,
    id: string,
}

interface UserValidate {
    "user": {
        "id": string,
        "username": string,
    },
    "token": string,
}
interface UserSchema {
    user: UserValidate,
    valid: boolean,
}

export const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const validUser = async (username: string, password: string) => {
    try {
        const response = await axios.request({
            method: 'POST',
            url: 'http://localhost:4000/sessions',
            data: {
                "username": username,
                "password": password,
            }
        })
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error)
    }
}

export const getHabits = async (userId: string | null) => {
    const url = `/getHabits`;
    try {
        const response = await axios.request<habitSchema[]>({
            method: 'POST',
            url: `http://localhost:4000${url}`,
            data: {
                userId: userId,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);

    }
}
export const deleteHabit = async (userId: string | null, habit: string) => {
    const url = `/deleteHabit`;
    try {
        const response = await axios.request<habitSchema[]>({
            method: 'POST',
            url: `http://localhost:4000${url}`,
            data: {
                userId: userId,
                habit: habit,
            },
        });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);

    }
}

export const createdHabit = async (habit: string, frequenciaHabit: string, userId: string) => {
    const url = `/createHabit`;
    try {
        const data = await axios.request<habitSchema[]>({
            method: 'POST',
            url: `http://localhost:4000${url}`,
            data: {
                "habit": habit,
                "frequenciaHabit": frequenciaHabit,
                "userId": userId,
            }
        })
        if (data.status === 201) {
            return true;
        }
        else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
}


export const createdUser = async (username: string, password: string) => {
    try {
        const data = await axios.request<habitSchema[]>({
            method: 'POST',
            url: 'http://localhost:4000/users',
            data: {
                "username": username,
                "password": password,
            }
        })
        if (data.status === 201) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }
}

