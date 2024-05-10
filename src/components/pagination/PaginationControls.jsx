/**
 * Renders pagination controls consisting of "Previous" and "Next" buttons along with the current page indicator.
 * This component enables navigation between paginated resources by interacting with provided callback functions.
 * The buttons are disabled appropriately based on the current page relative to the total number of pages.
 *
 * @param {Object} props - The properties passed to the PaginationControls component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages available.
 * @param {Function} props.onNext - Callback function that is called when the "Next" button is clicked.
 * @param {Function} props.onPrev - Callback function that is called when the "Previous" button is clicked.
 * @returns {JSX.Element} A div element that contains the pagination control buttons and page indicator.
 */
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const PaginationControls = ({ currentPage, totalPages, onNext, onPrev }) => {
	return (
		<div className='flex items-center justify-center space-x-4 mt-4'>
			<CustomButton
				onClick={onPrev}
				disabled={currentPage <= 1}
				className='text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed px-4 py-2 rounded'
			>
				Previous
			</CustomButton>
			<span className='text-gray-800'>
				Page {currentPage} of {totalPages}
			</span>
			<CustomButton
				onClick={onNext}
				disabled={currentPage >= totalPages}
				className='text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed px-4 py-2 rounded'
			>
				Next
			</CustomButton>
		</div>
	);
};

PaginationControls.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
};

export default PaginationControls;
