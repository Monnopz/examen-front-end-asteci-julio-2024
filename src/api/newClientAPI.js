import axios from 'axios'

const newClientAPI = axios.create({
    baseURL: 'http://httpbin.org'
})

export default newClientAPI