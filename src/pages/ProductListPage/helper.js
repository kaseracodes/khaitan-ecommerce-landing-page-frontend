import { useEffect, useState } from "react";
import { productAPI } from "../../networking/api/productAPI";
import { cartAPI } from '../../networking/api/cartAPI';

export function useProductListPageLogic(categoryId) {
    const [productListData, setProductListData] = useState(null);
    const [productColors, setProductColors] = useState([]);
    const [productMedia, setProductMedia] = useState([]);
    const [productAddedToCart, setProductAddedToCart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductList(categoryId) {
            setIsLoading(true);
            try {
                const response = await productAPI.list(false);
                if (response.success) {
                    const filteredProductOnCategoryId = (categoryId > 0) ? response.data.filter((productObject) => productObject.categoryId === categoryId) : response.data;
                    const uniqueColors = [...new Set(response.data.media.map((media) => media.colorHex))];

                    setProductColors(uniqueColors);
                    setProductMedia(response.data.media);
                    setProductListData(filteredProductOnCategoryId);
                } else {
                    setError(response);
                }
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProductList();
    }, [categoryId]);

    const addToCart = async (cartId, productId) => {
        setIsLoading(true);
        try {
            const response = await cartAPI.addItem(cartId, { productId: productId, shouldAddToCart: true });
            if (response.success) {
                setProductAddedToCart(true);
            } else {
                setError(response);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        productListData,
        productColors,
        productMedia,
        addToCart,
        productAddedToCart,
        isLoading,
        error
    }
}