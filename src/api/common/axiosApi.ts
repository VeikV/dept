import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api'

export const axiosApi = axios.create({
  baseURL: BASE_URL,
})

axiosApi.defaults.headers.common['Content-Type'] = 'application/json'
