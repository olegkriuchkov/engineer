import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/neo'
});

export default http;