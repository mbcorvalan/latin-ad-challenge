import PropTypes from 'prop-types';
import DisplayAdCard from './DisplayAdsCard';

const DisplayList = ({ displays }) => {
	return (
		<ul>
			{displays.map(display => (
				<li key={display.id}>
					<DisplayAdCard {...display} />
				</li>
			))}
		</ul>
	);
};

DisplayList.propTypes = {
	displays: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired, // Ensure each display has an ID for the key prop
			name: PropTypes.string.isRequired, // Name of the display
			description: PropTypes.string.isRequired, // Description of the display
			price_per_day: PropTypes.string.isRequired, // Price per day, assumed to be a string
			resolution_height: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired, // Resolution height, accepting both string and number
			resolution_width: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired, // Resolution width
			type: PropTypes.string.isRequired, // Type of display (indoor, outdoor, etc.)
			picture_url: PropTypes.string,
		}),
	).isRequired,
};

export default DisplayList;
