import axios from 'axios'

const baseUrl = '/api/messages'

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

// Vi letar upp alla funktioner vi vill exportera
export default { create }
