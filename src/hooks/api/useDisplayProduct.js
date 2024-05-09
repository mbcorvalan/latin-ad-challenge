import { useState, useEffect, useCallback } from 'react';
import { getProduct } from '../../api/displayProduct';
import useAuth from '../auth/useAuth';

const useDisplayProduct = displayId => {
	const { auth } = useAuth();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [displayData, setDisplaysData] = useState(null);

	const fetchData = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await getProduct({
				id: displayId,
				token: auth.accessToken,
			});
			setDisplaysData(response);
			if (response) {
				setDisplaysData(response);
			} else {
				setError('Invalid response from the server');
			}
		} catch (error) {
			setError(`Error fetching display: ${error.message || 'Unknown error'}`);
			console.error('Error fetching display:', error);
		} finally {
			setLoading(false);
		}
	}, [displayId, auth.accessToken]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return {
		displayData,
		loading,
		error,
	};
};

export default useDisplayProduct;
