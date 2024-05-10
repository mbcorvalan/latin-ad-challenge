/**
 * Custom hook to handle the deletion of a display product.
 * This hook encapsulates all logic related to deleting a product, including API calls,
 * error handling, loading state, and reporting changes to product state.
 *
 * @param {number} displayId - The unique identifier of the display to be deleted.
 * @returns {Object} An object containing properties and methods for managing the deletion process:
 *   - handleDelete: Function to initiate the deletion.
 *   - isLoading: Boolean indicating if the deletion process is ongoing.
 *   - error: String describing any error that occurred during deletion.
 *   - isDeleted: Boolean indicating if the deletion was successful.
 */

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
