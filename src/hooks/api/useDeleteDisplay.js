import { useState } from 'react';
import { deleteDisplay } from '../../api/delete';
import useAuth from '../auth/useAuth';

const useDeleteDisplay = displayId => {
	const { auth } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isDeleted, setIsDeleted] = useState(false);

	const handleDelete = async () => {
		setIsLoading(true);
		setError(null);
		setIsDeleted(false);
		try {
			await deleteDisplay({ id: displayId, token: auth.accessToken });
			setIsDeleted(true);
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
