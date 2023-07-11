import axios from 'axios';

interface habitSchema {
    habit: string,
    frequenciaHabit: string,
    userId: string,
    id: string,
}

export const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const validUser = async (username: string, password: string) => {
    let url = '/sessions';
}

export const getHabits = async (userID: string) => {
    const url = `/getHabits`;
    try {
        await axios.request<habitSchema[]>({
            method: 'POST',
            url: `http://localhost:4000${url}`,
            data: {
                "userId": userID,
            }
        }).then(response => {
            if (response.status === 200) {
                return response.data;
            } else if (response.status !== 200) {
                console.log('Error');
            }
        }).catch(error => {
            console.log(error);
        })
    } catch (error) {
        console.log(error);

    }
}

