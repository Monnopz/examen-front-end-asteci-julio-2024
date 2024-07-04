import axios from 'axios'

const _BASE_URL = 'https://jsonplaceholder.typicode.com'

const clientsTableAPI = axios.create({
    baseURL: _BASE_URL
})

export default clientsTableAPI