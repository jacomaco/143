import axios from 'axios';
const baseUrl = '/api/jobs'; // 'http://localhost:3001/api/jobs'

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Fel vid hämtning av jobb:', error);
    // Genom att "kasta" felet vidare (throw) kan komponenten som anropar 
    // funktionen bestämma hur felet ska visas för användaren.
    throw error; 
  }
};

const apply = async (id, formData) => {
  try {
    const response = await axios.post(`${baseUrl}/${id}/ansokan`, formData);
    return response.data;
  } catch (error) {
    console.error(`Fel vid ansökan till jobb ${id}:`, error);
    throw error;
  }
};

export default { getAll, apply };