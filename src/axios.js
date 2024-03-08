import axios from 'axios';

const instace = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 5000,
});

export default instace;
