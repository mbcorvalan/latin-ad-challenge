import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://challenge-front-7fw1.onrender.com',
});

export default axiosInstance;
