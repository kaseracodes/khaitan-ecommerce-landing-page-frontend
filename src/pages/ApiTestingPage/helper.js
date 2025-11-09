import { useEffect, useState } from 'react';
import { productAPI } from "../../networking/api/productAPI";
import { categoryAPI } from "../../networking/api/categoryAPI";
import { colorAPI } from '../../networking/api/colorAPI';
import { mediaAPI } from '../../networking/api/mediaAPI';
import { userAPI } from '../../networking/api/userAPI';

export function useApiTestingPageLogic() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function apiTester() {
            try {
                // Product APIs
                const response = await productAPI.list(true);
                // const response = await productAPI.details(41, false);

                // Category API
                // const response = await categoryAPI.list(false);

                // Color API
                // const response = await colorAPI.list(false);

                // Media APIs
                // const response = await mediaAPI.list(false);
                // const response = await mediaAPI.byUtility('homepage', true);
                // const response = await mediaAPI.byName('sample', true);
                // const response = await mediaAPI.details(52, true);

                // User APIs
                // const requestBody = {
                //     name: "Shivam Kasera",
                //     phoneNumber: "7439743211",
                //     email: "founders@hiredue.com",
                //     password: "Password123",
                //     roleId: 1,
                //     gender: "Male"
                // };
                // const response = await userAPI.signup(requestBody, true);

                // const requestBody = {
                //     email: "founders@hiredue.com",
                //     password: "password123*"
                // };
                // const response = await userAPI.signin(requestBody, true);
                // if (response.success && response.data?.token) {
                //     localStorage.setItem("authToken", response.data.token);
                //     console.log("✅ Token saved to localStorage");
                // }

                // const response = await userAPI.verifyOtp(1308, { otp: "123456" }, true);
                // const response = await userAPI.resendOtp(1308, true);
                // const response = await userAPI.update({ name: "ShivamK", dateOfBirth: null, gender: "Male" }, true);
                // const response = await userAPI.profile(true);
                // const response = await userAPI.forgotPassword(1308, true);
                // const response = await userAPI.resetPassword(1308, { token: "your_token_here", newPassword: "NewPassword123" }, true);

                console.log(response);
                setError(null);
                setResponse(response);
            }
            catch (error) {
                setResponse(null);
                setError(error);
            }
        }

        apiTester();
    }, []);

    return { response, error };
}
