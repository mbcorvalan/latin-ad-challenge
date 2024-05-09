import { useState } from 'react';
import { deleteProduct } from '../../api/deleteProduct';
import useAuth from '../auth/useAuth';
import useProductChange from '../state/useProductChange';

const useDeleteDisplay = displayId => {
	const { auth } = useAuth();
	const { notifyProductChange } = useProductChange();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isDeleted, setIsDeleted] = useState(false);

	const handleDelete = async () => {
		setIsLoading(true);
		setError(null);
		setIsDeleted(false);
		try {
			await deleteProduct({ id: displayId, token: auth.accessToken });
			setIsDeleted(true);
			notifyProductChange();
		} catch (error) {
			console.error('Error deleting display:', error);
			setError(
				'Failed to delete display: ' +
					(error.response?.data.message || error.message),
			);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		handleDelete,
		isLoading,
		error,
		isDeleted,
	};
};

export default useDeleteDisplay;
