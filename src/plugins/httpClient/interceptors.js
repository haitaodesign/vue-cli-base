import Axios from 'axios'

const service = Axios.create({
  baseURL: '/'
})

export default service
