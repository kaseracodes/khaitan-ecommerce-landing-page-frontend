// src/networking/urls.js
export const API_URLS = {
    PRODUCT: {
        LIST: () => '/v1/products/attributes/media',
        DETAILS: (id) => `/v1/products/${id}/attributes/media`,
    },

    CATEGORY: {
        LIST: () => '/v1/categories/',
    },

    COLOR: {
        LIST: () => '/v1/colors/',
    },

    MEDIA: {
        LIST: () => '/v1/media',
        BY_NAME: (name) => `/v1/media?name=${encodeURIComponent(name)}`,
        BY_UTILITY: (utility) => `/v1/media?utility=${encodeURIComponent(utility)}`,
        DETAILS: (id) => `/v1/media/${id}`,
    },

    USER: {
        SIGNUP: () => '/v1/users/signup',
        SIGNIN: () => '/v1/users/signin',
        VERIFY_OTP: (id) => `/v1/users/${id}/verify/otp`,
        RESEND_OTP: (id) => `/v1/users/${id}/resend-otp`,
        UPDATE: () => '/v1/users',
        PROFILE: () => '/v1/users/profile',
        FORGOT_PASSWORD: (id) => `/v1/users/${id}/forgot-password`,
        RESET_PASSWORD: (id) => `/v1/users/${id}/reset-password`,
    },
};
