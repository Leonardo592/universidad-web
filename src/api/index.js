import axios from 'axios';

const API_BASE_URL = 'https://portal-admin.tramiteuancv.com';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// export const STORAGE_URL = `${API_BASE_URL}/storage`;
export const STORAGE_URL = `${API_BASE_URL}`;

export default apiClient;
