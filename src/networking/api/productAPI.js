// src/networking/api/productApi.js
import apiClient from '../apiClient';
import { API_URLS } from '../urls';

export const productApi = {

  list: (enableLogging = false) => apiClient.get(API_URLS.PRODUCT.LIST, { enableLogging }),

  details: (id, enableLogging = false) => apiClient.get(API_URLS.PRODUCT.DETAILS(id), { enableLogging }),

};
