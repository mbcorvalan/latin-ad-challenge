/**
 * Attempts to log in a user using provided credentials.
 *
 * This function sends a POST request to the LOGIN_URL endpoint with
 * the user's email and password. If the authentication is successful,
 * it returns an object containing the access token and the user's name.
 * If the authentication fails, it logs the error and returns null.
 *
 * @param {Object} user - An object containing the login credentials.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password of the user.
 * @returns {Promise<Object|null>} A promise that resolves to an object containing
 *         the accessToken and name of the user if successful, or null if an error occurs.
 */

import axiosInstance from './axios';
import { LOGIN_URL } from '../constants/urls';

export async function login(user) {
	try {
		const response = await axiosInstance.post(
			LOGIN_URL,
			{ email: user.email, password: user.password },
			{ headers: { 'Content-Type': 'application/json' } },
		);
		const accessToken = response.data.token;
		const name = response.data.name;
		return {
			accessToken,
			name,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
}
