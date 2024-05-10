/**
 * Retrieves a product by its ID.
 * @param {Object} params - The parameters for retrieving the product.
 * @param {number} params.id - The ID of the product to retrieve.
 * @param {string} params.token - Authorization token.
 * @returns {Promise<Object>} The response from the server containing the product details.
 */
import axiosInstance from './axios';

export const getProduct = async ({ id, token }) => {
	let url = `/display/${id}`;

	try {
		const response = await axiosInstance.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error('Failed to delete display:', error);
		throw new Error('Failed to delete display: ' + error.response.data.message);
	}
};
