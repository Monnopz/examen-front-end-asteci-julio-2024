import axios from 'axios'

const clientsTableAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default clientsTableAPI