// src/networking/api/colorAPI.js
import apiClient from '../apiClient';
import { API_URLS } from '../urls';

export const colorAPI = {

    list: (enableLogging = false) => apiClient.get(API_URLS.COLOR.LIST(), { enableLogging }),
    
};
