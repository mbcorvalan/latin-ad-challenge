import { useState, useEffect } from 'react';
import useAuth from '../auth/useAuth';
import useDisplays from '../api/useDisplays';

const useDashboardData = () => {
	const { auth } = useAuth();

	const [params, setParams] = useState({
		pageSize: 5,
		currentPage: 1,
		name: '',
		type: '',
		token: auth.accessToken,
	});

	const initialParams = {
		pageSize: 5,
		currentPage: 1,
		name: '',
		type: '',
		token: auth.accessToken,
	};

	const offset = (params.currentPage - 1) * params.pageSize;
	const [totalPages, setTotalPages] = useState(1);
	const { displays, totalCount, loading, error } = useDisplays({
		...params,
		offset,
	});

	useEffect(() => {
		if (displays.length > 0) {
			const totalPagesCount = Math.ceil(totalCount / params.pageSize);
			setTotalPages(totalPagesCount);
		} else {
			setTotalPages(1);
		}
	}, [displays, params.pageSize, totalCount]);

	const handleSubmit = params => {
		setParams(prevParams => ({
			...prevParams,
			...params,
			currentPage: 1,
		}));
	};

	const handleResetFilters = () => {
		setParams(initialParams);
	};

	const nextPage = () => {
		setParams(prevParams => ({
			...prevParams,
			currentPage: prevParams.currentPage + 1,
		}));
	};

	const prevPage = () => {
		setParams(prevParams => ({
			...prevParams,
			currentPage: prevParams.currentPage - 1,
		}));
	};

	return {
		params,
		displays,
		loading,
		error,
		handleSubmit,
		handleResetFilters,
		nextPage,
		prevPage,
		totalPages,
	};
};

export default useDashboardData;
