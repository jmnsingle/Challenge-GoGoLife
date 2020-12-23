import axios from 'axios';

// Exemplo => baseURL: 'http://192.168.15.25:3333',

const api = axios.create({
  baseURL: 'http://[seuEnderecoIp]:3333',
});

export default api;
