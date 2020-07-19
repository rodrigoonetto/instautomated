import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://instautomated-api.herokuapp.com/'
})

export default api;
