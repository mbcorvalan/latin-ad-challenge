import { useState, useEffect, useCallback } from 'react';
import { fetchDisplays } from '../../api/display';

const useDisplays = ({ pageSize, offset, name, type, token }) => {
	const [displaysData, setDisplaysData] = useState({
		displays: [],
		totalCount: 0,
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetchDisplays({
				pageSize,
				offset,
				name,
				type,
				token,
			});
			if (response.data && response.totalCount !== undefined) {
				setDisplaysData({
					displays: response.data,
					totalCount: response.totalCount,
				});
			} else {
				setError('Invalid response from the server');
			}
		} catch (error) {
			setError(`Error fetching displays: ${error.message || 'Unknown error'}`);
			console.error('Error fetching displays:', error);
		} finally {
			setLoading(false);
		}
	}, [pageSize, offset, name, type, token]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return {
		displays: displaysData.displays,
		totalCount: displaysData.totalCount,
		loading,
		error,
		fetchData,
	};
};

export default useDisplays;
