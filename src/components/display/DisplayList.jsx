/**
 * Renders a list of display advertisements as a table of rows.
 * Each display data is passed to the DisplayAdCard component.
 *
 * @param {Object} props - The properties passed to the DisplayList component.
 * @param {Array<Object>} props.displays - Array of display objects that contain information about each display.
 * @param {number} props.displays[].id - The unique identifier for each display.
 * @param {string} props.displays[].name - The name of the display.
 * @param {string} props.displays[].description - The description of the display.
 * @param {string|number} props.displays[].price_per_day - The price per day for renting the display.
 * @param {string|number} props.displays[].resolution_height - The vertical resolution of the display.
 * @param {string|number} props.displays[].resolution_width - The horizontal resolution of the display.
 * @param {string} props.displays[].type - The type of the display (e.g., indoor, outdoor).
 * @param {string} [props.displays[].picture_url] - The URL of the display's picture.
 * @returns {JSX.Element} A table row element for each display in the displays array.
 */

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
