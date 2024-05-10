import axiosInstance from '../../api/axios';
import { describe, expect, it } from 'vitest';

describe('Axios instance configuration', () => {
	it('should have the correct base URL', () => {
		const expectedBaseURL = 'https://challenge-front-7fw1.onrender.com';
		const actualBaseURL = axiosInstance.defaults.baseURL;
		expect(actualBaseURL).toBe(expectedBaseURL);
	});

	it('should have a get method', () => {
		expect(axiosInstance.get).toBeInstanceOf(Function);
	});
});
