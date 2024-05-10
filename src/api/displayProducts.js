/**
 * Fetches a list of products based on pagination and optional filters.
 * @param {Object} params - The parameters for fetching the products.
 * @param {number} params.pageSize - Number of products per page.
 * @param {number} params.offset - The offset for pagination.
 * @param {string} [params.name] - Optional filter by product name.
 * @param {string} [params.type] - Optional filter by product type.
 * @param {string} params.token - Authorization token.
 * @returns {Promise<Object>} The response from the server containing the list of products.
 */
import axiosInstance from './axios';

export const getProducts = async ({ pageSize, offset, name, type, token }) => {
	let url = `/display?pageSize=${pageSize}&offset=${offset}`;
	if (name) {
		url += `&name=${name}`;
	}
	if (type) {
		url += `&type=${type}`;
	}

	try {
		const response = await axiosInstance.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		console.error('Failed to fetch displays:', error);
		throw new Error('Failed to fetch displays');
	}
};
