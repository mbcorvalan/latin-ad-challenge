import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const PaginationControls = ({ currentPage, totalPages, onNext, onPrev }) => {
	return (
		<div>
			<CustomButton onClick={onPrev} disabled={currentPage <= 1}>
				Anterior
			</CustomButton>
			<span>
				Página {currentPage} de {totalPages}
			</span>
			<CustomButton onClick={onNext} disabled={currentPage >= totalPages}>
				Siguiente
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
