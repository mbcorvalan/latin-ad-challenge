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
