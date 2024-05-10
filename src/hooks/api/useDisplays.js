/**
 * Custom hook for fetching and managing a list of display products based on pagination and filter criteria.
 * This hook integrates with the getProducts API to fetch data and manages loading states, error handling, and data storage.
 * It responds to changes in product state, re-fetching data when necessary.
 *
 * @param {Object} params - The parameters for fetching display products.
 * @param {number} params.pageSize - The number of items per page.
 * @param {number} params.offset - The pagination offset.
 * @param {string} [params.name] - Optional filter by product name.
 * @param {string} [params.type] - Optional filter by product type.
 * @param {string} params.token - Authorization token.
 * @returns {Object} An object containing:
 *   - displays: Array of display data.
 *   - totalCount: Total number of products that match the query, useful for pagination.
 *   - loading: Boolean indicating if the request is in progress.
 *   - error: String describing any errors encountered during the fetch.
 *   - fetchData: Function to trigger data fetching manually.
 */

import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../../api/displayProducts';
import useProductChange from '../state/useProductChange';

const useDisplays = ({ pageSize, offset, name, type, token }) => {
	const [displaysData, setDisplaysData] = useState({
		displays: [],
		totalCount: 0,
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { productChanged, resetProductChange } = useProductChange();

	const fetchData = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await getProducts({
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

	useEffect(() => {
		if (productChanged) {
			fetchData();
			resetProductChange();
		}
	}, [productChanged, fetchData, resetProductChange]);

	return {
		displays: displaysData.displays,
		totalCount: displaysData.totalCount,
		loading,
		error,
		fetchData,
	};
};

export default useDisplays;
