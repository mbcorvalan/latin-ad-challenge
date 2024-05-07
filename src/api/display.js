import axiosInstance from './axios';

export const fetchDisplays = async ({
	pageSize,
	offset,
	name,
	type,
	token,
}) => {
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
