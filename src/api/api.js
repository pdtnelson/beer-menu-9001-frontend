import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://localhost/api`, // TODO: Update with NODE_ENV
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}