import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fb-mern-clone-adrianchi.herokuapp.com',
})

export default instance