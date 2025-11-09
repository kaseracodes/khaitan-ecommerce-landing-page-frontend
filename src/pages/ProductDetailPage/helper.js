import { useEffect, useState } from "react";
import { productAPI } from "../../networking/api/productAPI";
import { cartAPI } from "../../networking/api/cartAPI";

export function useProductDetailPageLogic(productId) {
	const [productData, setProductData] = useState(null);
	// const [productColors, setProductColors] = useState([]);
	const [colorMediaMap, setColorMediaMap] = useState([]);
	// const [productAttributes, setProductAttributes] = useState([]);
	const [selectedColor, setSelectedColor] = useState("all");
	const [productAddedToCart, setProductAddedToCart] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchProductDetails(productId) {
			setIsLoading(true);
			try {
				const response = await productAPI.details(productId, false);

				const colorMediaMapData = response.data.media.reduce(
					(map, singleMediaObject) => {
						map[singleMediaObject.colorHex] = singleMediaObject;
						return map;
					},
					{}
				);
				colorMediaMapData["all"] = response.data.media;

				setColorMediaMap(colorMediaMapData);
				setProductData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchProductDetails(productId);
	}, [productId]);

	const handleColorButtonClick = (inSelectedColor) =>
		inSelectedColor === null
			? setSelectedColor("all")
			: setSelectedColor(inSelectedColor);

	const addToCart = async (cartId) => {
		setIsLoading(true);
		try {
			const response = await cartAPI.addItem(cartId, {
				productId: productId,
				shouldAddToCart: true,
			});
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
		productData,
		colorMediaMap,
		selectedColor,
		handleColorButtonClick,
		addToCart,
		productAddedToCart,
		isLoading,
		error,
	};
}
