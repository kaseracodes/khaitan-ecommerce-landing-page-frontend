// src/networking/api/mediaAPI.js
import apiClient from '../apiClient';
import { API_URLS } from '../urls';

export const mediaAPI = {

    list: (enableLogging = false) => apiClient.get(API_URLS.MEDIA.LIST(), { enableLogging }),

    byName: (name, enableLogging = false) => apiClient.get(API_URLS.MEDIA.BY_NAME(name), { enableLogging }),

    byUtility: (utility, enableLogging = false) => apiClient.get(API_URLS.MEDIA.BY_UTILITY(utility), { enableLogging }),

    details: (id, enableLogging = false) => apiClient.get(API_URLS.MEDIA.DETAILS(id), { enableLogging }),
    
};
