import { useEffect, useState } from "react";
import { userAPI } from "../../networking/api/userAPI";
import { orderAPI } from "../../networking/api/orderAPI";

export function useUserProfilePageLogic() {
    const [userData, setUserData] = useState(null);
    const [userOrders, setUserOrders] = useState([]);
    const [userAddresses, setUserAddresses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserProfile() {
            setIsLoading(true);
            try {
                const response = await userAPI.profile(false);
                if (response.success) {
                    setUserData(response.data);
                } else {
                    setError(response);
                }
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        async function fetchUserOrders() {
            try {
                const response = await orderAPI.orders(false);
                if (response.success) {
                    setUserOrders(response.data);
                } else {
                    setError(response);
                }
            } catch (error) {
                setError(error);
            }
        }

        const addresses = localStorage.getItem("userAddresses");
        if (addresses) {
            setUserAddresses(JSON.parse(addresses));
        }

        fetchUserProfile();
        fetchUserOrders();
    }, []);

    const handleLogOutClick = () => {
        localStorage.removeItem("authToken");
        window.location.reload();
    }

    return {
        userData,
        userOrders,
        userAddresses,
        handleLogOutClick,
        isLoading,
        error
    }
}