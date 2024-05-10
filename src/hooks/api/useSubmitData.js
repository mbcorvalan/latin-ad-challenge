import { useState } from 'react';
import useAuth from '../auth/useAuth';
import { postDisplay } from '../../api/createProduct';

export const useSubmitData = () => {
	const [isLoading, setLoading] = useState(false);
	const { auth } = useAuth();
	const [error, setError] = useState(null);

	const submitData = async formData => {
		setLoading(true);
		setError(null);
		try {
			const result = await postDisplay(formData, auth.accessToken);
			return result;
		} catch (err) {
			setError(err.message);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { submitData, isLoading, error };
};
