/**
 * Component that renders detailed information about a display in a card layout.
 * It shows the display's picture, name, description, type, resolution, and price per day.
 * It also offers a button to potentially buy the display. The layout is responsive,
 * accommodating different screen sizes.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.displayData - The data of the display to be detailed.
 * @param {number} props.displayData.id - The unique identifier of the display.
 * @param {string} props.displayData.name - The name of the display.
 * @param {string} props.displayData.description - The description of the display.
 * @param {string|number} props.displayData.price_per_day - The price per day of the display.
 * @param {string|number} props.displayData.resolution_height - The height of the display's resolution.
 * @param {string|number} props.displayData.resolution_width - The width of the display's resolution.
 * @param {string} props.displayData.type - The type of the display, e.g., 'indoor' or 'outdoor'.
 * @param {string} [props.displayData.picture_url] - The URL of the display's picture.
 * @returns {JSX.Element} A JSX element that renders the detailed display card.
 */

import PropTypes from 'prop-types';
function DisplayDetailsCard({ displayData }) {
	if (!displayData) {
		return <p>No data available.</p>;
	}
	return (
		<div className='min-w-screen min-h-screen flex items-center justify-center p-5 lg:p-10 overflow-hidden'>
			<div className='w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800'>
				<div className='md:flex items-start -mx-10'>
					<div className='w-full md:w-1/2 px-10 mb-10 md:mb-0'>
						<div className='relative'>
							<img
								src={displayData.picture_url}
								className='w-full h-auto relative z-10'
								alt={displayData.name}
							/>
							<div className='border-4 border-yellow-200 absolute top-5 bottom-5 left-5 right-5 z-0'></div>
						</div>
					</div>
					<div className='w-full md:w-1/2 px-10'>
						<div className='mb-10'>
							<h1 className='font-bold uppercase text-3xl mb-3'>
								{displayData.name}
							</h1>
							<p className='text-sm mb-4'>{displayData.description}</p>
							<div
								className={`inline-flex items-center justify-center px-3 py-1 text-sm font-semibold leading-5 rounded-full ${displayData.type === 'indoor' ? 'bg-orange-800 text-white' : 'bg-green-100 text-green-800'}`}
							>
								{displayData.type}
							</div>
							<div className='mt-2 text-sm font-medium text-gray-600'>
								Resolution: {displayData.resolution_height} x{' '}
								{displayData.resolution_width} pixels
							</div>
						</div>
						<div className='flex items-end justify-start space-x-4'>
							<div className='flex items-baseline space-x-2'>
								<span className='text-2xl leading-none'>$</span>
								<span className='font-bold text-5xl leading-none'>
									{displayData.price_per_day}
								</span>
							</div>
							<button className='flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white rounded-full px-10 py-2 font-semibold transition-colors duration-300'>
								BUY NOW
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

DisplayDetailsCard.propTypes = {
	displayData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price_per_day: PropTypes.string.isRequired,
		resolution_height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		resolution_width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		type: PropTypes.string.isRequired,
		picture_url: PropTypes.string,
	}).isRequired,
};

export default DisplayDetailsCard;
