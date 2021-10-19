import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api'
});

const createUser = (data) => httpClient.post('/users', data);