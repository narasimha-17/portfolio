import axios from 'axios'

export const API_BASE = import.meta.env.VITE_API_URL || ''

const instance = axios.create({
  baseURL: API_BASE + '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
