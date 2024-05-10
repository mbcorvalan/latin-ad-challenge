/**
 * Custom hook that handles the submission of data to a server.
 * This hook manages the loading state and captures any errors during the submission process.
 * It uses the user's authentication token from the useAuth hook to make authorized API requests.
 *
 * @returns {Object} An object containing:
 *   - submitData: Function that takes formData and submits it using the postDisplay API method.
 *   - isLoading: Boolean indicating if the submission is in progress.
 *   - error: String representing any error message from failed submissions.
 */

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
