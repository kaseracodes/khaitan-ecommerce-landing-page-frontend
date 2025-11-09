import apiClient from '../apiClient';
import { API_URLS } from '../urls';

export const categoryAPI = {

    list: (enableLogging = false) => apiClient.get(API_URLS.CATEGORY.LIST(), { enableLogging }),
    
};
