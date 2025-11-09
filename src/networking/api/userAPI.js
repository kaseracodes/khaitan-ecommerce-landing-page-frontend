import apiClient from '../apiClient';
import { API_URLS } from '../urls';

export const userAPI = {

    signup: (data, enableLogging = false) => apiClient.post(API_URLS.USER.SIGNUP(), data, { enableLogging }),

    signin: (data, enableLogging = false) => apiClient.post(API_URLS.USER.SIGNIN(), data, { enableLogging }),

    verifyOtp: (id, data, enableLogging = false) => apiClient.patch(API_URLS.USER.VERIFY_OTP(id), data, { enableLogging }),

    resendOtp: (id, enableLogging = false) => apiClient.post(API_URLS.USER.RESEND_OTP(id), {}, { enableLogging }),

    update: (data, enableLogging = false) => apiClient.patch(API_URLS.USER.UPDATE(), data, { enableLogging }),

    profile: (enableLogging = false) => apiClient.get(API_URLS.USER.PROFILE(), { enableLogging }),

    forgotPassword: (id, enableLogging = false) => apiClient.post(API_URLS.USER.FORGOT_PASSWORD(id), {}, { enableLogging }),

    resetPassword: (id, data, enableLogging = false) => apiClient.patch(API_URLS.USER.RESET_PASSWORD(id), data, { enableLogging }),
    
};
