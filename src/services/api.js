import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': '*',
        'Access-Control-Allow-Origin': '*',
    }
});

export default api;