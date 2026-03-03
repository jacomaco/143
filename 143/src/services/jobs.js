import axios from 'axios';
const baseUrl = '/api/jobs' // 'http://localhost:3001/api/jobs'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

export default { getAll }