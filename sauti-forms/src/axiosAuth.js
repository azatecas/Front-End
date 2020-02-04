import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://sauti-studio-3.herokuapp.com/',
        headers: {
            Authorization: token
        }
    })
}