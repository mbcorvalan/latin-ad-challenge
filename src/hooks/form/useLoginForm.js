import { useState, useEffect, useRef } from 'react';
import { ERROR_MESSAGES } from '../../constants/error';
import { login as loginAPI } from '../../api/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const useLoginForm = () => {
	const { setUserData } = useAuth();
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
		const loginData = await loginAPI(user);

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
		setErrorMsg('');
		setLoading(true);
		try {
			const userData = await processLogin(user);
			setUserData(userData);
			setLoading(false);
			navigate('/dashboard', { state: { from: location } });
		} catch (error) {
			setLoading(false);
			handleError(error);
		}
	};

	const handleError = error => {
		if (error.message === 'Invalid login data') {
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
