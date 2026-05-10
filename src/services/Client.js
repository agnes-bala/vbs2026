// src/services/Client.js
import { create } from 'apisauce';
import { config } from "../partnerconfig";

const apiClient = create({
    baseURL: config.baseUrl,
});

apiClient.addRequestTransform(request => {
    const token = localStorage.getItem('jwt');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
});

apiClient.addResponseTransform(response => {
    if (!response.ok) {
        console.error('API Error:', response.problem, response.data);
    }
});

export default apiClient;