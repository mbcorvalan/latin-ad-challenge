import { useState } from 'react';
import useAuth from '../auth/useAuth';
import { postDisplay } from '../../api/create';

export const useSubmitData = () => {
	const [isLoading, setLoading] = useState(false);
	const { auth } = useAuth();
	const [error, setError] = useState(null);

	const submitData = async formData => {
		setLoading(true);
		setError(null);
		try {
			const result = await postDisplay(formData, auth.accessToken);
			return result; // Assuming result has data indicative of success
		} catch (err) {
			setError(err.message);
			throw err; // Re-throw the error to handle it in the calling function
		} finally {
			setLoading(false);
		}
	};

	return { submitData, isLoading, error };
};
