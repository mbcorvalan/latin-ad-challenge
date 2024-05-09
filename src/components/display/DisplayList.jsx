import PropTypes from 'prop-types';
import DisplayAdCard from './DisplayAdCard';

const DisplayList = ({ displays }) => {
	return displays.map(display => (
		<tr key={display.id}>
			<DisplayAdCard {...display} />
		</tr>
	));
};

DisplayList.propTypes = {
	displays: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price_per_day: PropTypes.string.isRequired,
			resolution_height: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired,
			resolution_width: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired,
			type: PropTypes.string.isRequired,
			picture_url: PropTypes.string,
		}),
	).isRequired,
};

export default DisplayList;
