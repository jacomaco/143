import axios from 'axios';
const baseUrl = '/api/jobs' // 'http://localhost:3001/api/jobs'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}
const apply = async (id, formData) => {
  // Axios hanterar automatiskt 'Content-Type': 'multipart/form-data' 
  // när man skickar ett FormData-objekt
  const response = await axios.post(`${baseUrl}/${id}/ansokan`, formData)
  return response.data
}

export default { getAll, apply }