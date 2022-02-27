import axios from 'axios'

ENDPOINT = '/api/phones/'

const PhonesService = () => {
  async PhonesService () {
    try {
      return await axios.get(ENDPOINT)
    } catch (error){
        throw error
    }
  }
}

export default PhonesService