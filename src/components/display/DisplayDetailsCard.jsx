import PropTypes from 'prop-types';

function DisplayDetailsCard({ displayData }) {
	if (!displayData) {
		return <p>No data available.</p>;
	}
	return (
		<div>
			<h2>{displayData.name}</h2>
			<p>
				<strong>Description:</strong> {displayData.description}
			</p>
			<p>
				<strong>Price per day:</strong> {displayData.price_per_day}
			</p>
			<p>
				<strong>Resolution:</strong> {displayData.resolution_width} x{' '}
				{displayData.resolution_height}
			</p>
			<p>
				<strong>Type:</strong> {displayData.type}
			</p>
			<img
				src={displayData.picture_url}
				alt='Display'
				style={{ width: '100%', height: 'auto' }}
			/>
		</div>
	);
}

DisplayDetailsCard.propTypes = {
	displayData: PropTypes.arrayOf(
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

export default DisplayDetailsCard;
