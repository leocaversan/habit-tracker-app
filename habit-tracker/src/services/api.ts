import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const validUser = async (username: string, password: string) => {
    let url = '/sessions';
}