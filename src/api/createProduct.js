/**
 * Posts data to create a new display.
 * @param {Object} displayData - The data for the new display.
 * @param {string} token - Authorization token.
 * @returns {Promise<Object>} The response from the server.
 */
import axiosInstance from './axios';
import { DISPLAY } from '../constants/urls';

export const postDisplay = async (displayData, token) => {
	try {
		const response = await axiosInstance.post(DISPLAY, displayData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		console.error('Failed to post display:', error);
		throw new Error('Failed to post display');
	}
};
