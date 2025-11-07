import { use, useEffect, useState } from 'react';
import { productAPI } from "../../networking/api/productAPI";

export function useApiTestingPageLogic() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function apiTester() {
            try {
                // const response = await productAPI.list(true);
                const response = await productAPI.details(41, false);
                console.log(response);
                setError(null);
                setResponse(response);
            }
            catch (error) {
                setResponse(null);
                setError(error)
            }
        }
        apiTester();
    }, []);

    return { response, error };
}