/**
 * Component that provides a button to delete a display.
 * It uses a custom hook to manage the delete operation, showing a loading state,
 * and displaying messages upon successful deletion or error.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.displayId - The unique identifier for the display to be deleted.
 * @returns {JSX.Element} A JSX element that includes a button for deleting the display,
 *                         along with status messages indicating the operation's progress or result.
 */
import PropTypes from 'prop-types';
import useDeleteDisplay from '../../hooks/api/useDeleteDisplay';
import CustomButton from '../common/CustomButton';

const DisplayDelete = ({ displayId }) => {
	const { handleDelete, isLoading, error, isDeleted } =
		useDeleteDisplay(displayId);

	return (
		<div>
			<CustomButton
				className='text-red-600 hover:text-red-900'
				onClick={handleDelete}
				disabled={isLoading || isDeleted}
			>
				{isLoading ? 'Deleting...' : 'Delete'}
			</CustomButton>
			{isDeleted && <p>Display deleted successfully!</p>}
			{error && <p>Error: {error}</p>}
		</div>
	);
};

DisplayDelete.propTypes = {
	displayId: PropTypes.number.isRequired,
};

export default DisplayDelete;
