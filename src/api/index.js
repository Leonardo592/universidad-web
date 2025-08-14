import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const STORAGE_URL = `${API_BASE_URL}/storage`;

export default apiClient;
