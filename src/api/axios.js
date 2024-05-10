/**
 * Creates an instance of axios with predefined configuration.
 * This instance is configured with a base URL, which is used to
 * make HTTP requests to a specific domain. All requests using this
 * instance will automatically prepend the base URL to the endpoint paths.
 */
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://challenge-front-7fw1.onrender.com',
});

export default axiosInstance;
