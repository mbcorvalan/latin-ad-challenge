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
