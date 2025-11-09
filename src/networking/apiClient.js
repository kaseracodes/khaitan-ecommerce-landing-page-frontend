// src/networking/apiClient.js
import axios from "axios";

export function setupRequestInterceptor(apiClient) {
    apiClient.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("authToken");
            if (token) config.headers.Authorization = `Bearer ${token}`;

            if (config.enableLogging) {
                console.log("[Request Log]", {
                    method: config.method?.toUpperCase(),
                    url: config.baseURL + config.url,
                    headers: config.headers,
                    params: config.params,
                    data: config.data,
                });
            }

            return config;
        },
        (error) => {
            if (isDev) console.error("[Axios Request Error]", error);
            return Promise.reject(error);
        }
    );
}

export function setupResponseInterceptor(apiClient) {
    apiClient.interceptors.response.use(
        (response) => {
            const payload = response.data;

            // [TODO] fix backend typo: "sucess" → "success"
            if (payload.sucess && payload.success === undefined)
                payload.success = payload.sucess;

            if (response.config.enableLogging) {
                console.log("[Response Log]", {
                    url: response.config.url,
                    status: response.status,
                    data: payload,
                });
            }

            return {
                success: payload.success ?? true,
                message: payload.message ?? "",
                data: payload.data ?? {},
                error: payload.error ?? {},
                status: response.status,
            };
        },
        (error) => {
            const status = error?.response?.status;
            const payload = error?.response?.data || {};

            const normalizedError = {
                success: false,
                status,
                message:
                payload.message ||
                payload.error?.errorMessage ||error.message || "Unknown error occurred",
                error: payload.error || {},
            };

            if (status === 401) {
                console.log("Unauthorized → clearing session");
                localStorage.removeItem("authToken");
                // [TODO] fix: handle navigation on aunthorised error
                // window.dispatchEvent(new CustomEvent("unauthorized"));
            }

            if (status >= 500) {
                console.log("[Server Error]", normalizedError);
            }

            if (error.config?.enableLogging) {
                console.log("[Axios Error Response]", normalizedError);
            }

            return Promise.reject(normalizedError);
        }
    );
}

const apiClient = axios.create({
    baseURL: "https://api.khaitan.com/api",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

setupRequestInterceptor(apiClient);
setupResponseInterceptor(apiClient);

export default apiClient;
