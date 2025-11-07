// src/networking/urls.js
export const API_URLS = {
    PRODUCT: {
        LIST: '/v1/products',
        DETAILS: (id) => `/v1/products/${id}`,
    },
};
