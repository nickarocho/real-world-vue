import axios from 'axios';

const apiClient = axios.create({ // a SINGLE axios instance for the entire app
  baseURL: 'http://localhost:3000', // base URL for all calls to use
  withCredentials: false,
  headers: { // for authentication & configuration
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events') // appends to the base URL
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  }
}
