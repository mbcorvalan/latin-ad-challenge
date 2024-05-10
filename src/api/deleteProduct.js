/**
 * Deletes a product by its ID.
 * @param {Object} params - The parameters for deleting the product.
 * @param {number} params.id - The ID of the product to delete.
 * @param {string} params.token - Authorization token.
 * @returns {Promise<Object>} The response from the server after deletion.
 */
import axiosInstance from './axios';

export const deleteProduct = async ({ id, token }) => {
	let url = `/display/${id}`;

	try {
		const response = await axiosInstance.delete(url, {
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
