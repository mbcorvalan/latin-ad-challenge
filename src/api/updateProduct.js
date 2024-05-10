/**
 * Updates a product by its ID with the provided data.
 * @param {Object} params - The parameters for updating the product.
 * @param {number} params.id - The ID of the product to update.
 * @param {Object} params.displayData - The new data for the product.
 * @param {string} params.token - Authorization token.
 * @returns {Promise<Object>} The response from the server containing the updated product details.
 */
import axiosInstance from './axios';

export const putProduct = async ({ id, displayData, token }) => {
	let url = `/display/${id}`;

	try {
		const response = await axiosInstance.put(url, displayData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Failed to update display:', error);
		throw new Error('Failed to update display: ' + error.response.data.message);
	}
};
