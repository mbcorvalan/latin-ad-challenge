// usePagination.js
import { useState, useEffect } from 'react';

const usePagination = (initialPage = 1, totalPages = 1) => {
	const [currentPage, setCurrentPage] = useState(initialPage);

	useEffect(() => {
		if (currentPage < 1) {
			setCurrentPage(1);
		} else if (currentPage > totalPages) {
			setCurrentPage(totalPages);
		}
	}, [currentPage, totalPages]);

	const nextPage = () => {
		setCurrentPage(prevPage => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage(prevPage => prevPage - 1);
	};

	return { currentPage, nextPage, prevPage };
};

export default usePagination;
