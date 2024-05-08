import PropTypes from 'prop-types';
import useDeleteDisplay from '../../hooks/api/useDeleteDisplay';
import CustomButton from '../common/CustomButton';

const DisplayDelete = ({ displayId }) => {
	const { handleDelete, isLoading, error, isDeleted } =
		useDeleteDisplay(displayId);

	return (
		<div>
			<CustomButton onClick={handleDelete} disabled={isLoading || isDeleted}>
				{isLoading ? 'Deleting...' : 'Delete Display'}
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
