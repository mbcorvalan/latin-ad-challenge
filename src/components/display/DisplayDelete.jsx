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
