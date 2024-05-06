import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useLoginForm = (setAuth, isAuthenticated) => {
	const navigate = useNavigate();
	const location = useLocation();
	const userRef = useRef();
	const errRef = useRef();
	const [cookies, setCookie] = useCookies(['authToken']); // Aquí se inicializa el hook useCookies para gestionar cookies

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [loading, setLoading] = useState(false);

	const LOGIN_URL = '/login';

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrorMsg('');
	}, [user, password]);

	useEffect(() => {
		setUser('');
		setPassword('');
	}, [loading]);

	useEffect(() => {
		if (isAuthenticated) {
			setAuth({});
		}
	}, [isAuthenticated, setAuth]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!user || !emailRegex.test(user)) {
			setErrorMsg('Please enter a valid email address.');
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post(
				LOGIN_URL,
				{ email: user, password: password },
				{ headers: { 'Content-Type': 'application/json' } }
			);
			const accessToken = response.data.token;
			const name = response.data.name;
			setAuth({ name, user, password, accessToken });
			setLoading(false);
			setCookie('authToken', accessToken, {
				expires: new Date(Date.now() + 30 * 60 * 1000),
			}); // Guardar el token en una cookie con una duración de 30 minutos
			navigate('/dashboard', { state: { from: location } });
			console.log(cookies);
		} catch (error) {
			setLoading(false);
			if (!error.response) {
				setErrorMsg('No server response');
			} else if (error.response.status === 400) {
				setErrorMsg('Missing email or password');
			} else if (error.response.status === 401) {
				setErrorMsg('Invalid email or password');
			} else {
				setErrorMsg('Login failed, try again later');
			}
			errRef.current.focus();
		}
	};

	return {
		userRef,
		errRef,
		user,
		setUser,
		password,
		setPassword,
		errorMsg,
		loading,
		handleSubmit,
	};
};

export default useLoginForm;
