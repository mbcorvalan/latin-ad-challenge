import { useState, useEffect, useRef } from 'react';
import { ERROR_MESSAGES } from '../constants/error';
import { TIMEOUT_DURATION } from '../constants/timeouts';
import { login as loginAPI } from '../api/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const useLoginForm = () => {
	const { login, logout } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const errRef = useRef();
	const [user, setUser] = useState({ email: '', password: '' });
	const [errorMsg, setErrorMsg] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setErrorMsg('');
	}, [user]);

	const processLogin = async user => {
		const loginPromise = loginAPI(user);
		const timeoutPromise = new Promise((_, reject) =>
			setTimeout(() => reject(new Error('Timeout')), TIMEOUT_DURATION),
		);
		const loginData = await Promise.race([loginPromise, timeoutPromise]);

		if (!loginData || !loginData.name) {
			throw new Error('Invalid login data');
		}

		return {
			email: user.email,
			password: user.password,
			name: loginData.name,
			accessToken: loginData.accessToken,
		};
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			const userData = await processLogin(user);
			login(userData);
			setLoading(false);
			navigate('/dashboard', { state: { from: location } });
		} catch (error) {
			setLoading(false);
			handleError(error);
		}
	};

	const handleError = error => {
		if (error.message === 'Timeout') {
			setErrorMsg(ERROR_MESSAGES.TIMEOUT);
			logout();
			navigate('/login');
		} else if (error.message === 'Invalid login data') {
			setErrorMsg(ERROR_MESSAGES.INVALID_LOGIN_DATA);
		} else if (error.response) {
			if (error.response.status === 400) {
				setErrorMsg(ERROR_MESSAGES.MISSING_CREDENTIALS);
			} else if (error.response.status === 401) {
				setErrorMsg(ERROR_MESSAGES.INVALID_CREDENTIALS);
			} else {
				setErrorMsg(ERROR_MESSAGES.LOGIN_FAILED);
			}
		} else if (error.request) {
			setErrorMsg(ERROR_MESSAGES.NO_SERVER_RESPONSE);
		} else {
			setErrorMsg('Error: ' + error.message);
		}
		errRef.current.focus();
	};

	return {
		errRef,
		user,
		setUser,
		errorMsg,
		loading,
		handleSubmit,
	};
};

export default useLoginForm;
