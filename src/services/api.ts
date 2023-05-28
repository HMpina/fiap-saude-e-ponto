import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fiap-tarefa-backend.herokuapp.com'
})

export default api;