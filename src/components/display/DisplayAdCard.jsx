/**
 * Component that displays a single advertisement card for a product.
 * This card includes product details such as name, price per day, type, and resolution.
 * It provides buttons to view more details, edit, and delete the product.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.id - The unique identifier for the product.
 * @param {string} props.name - The name of the product.
 * @param {string} props.description - The description of the product.
 * @param {string} props.price_per_day - The rental price per day of the product.
 * @param {string|number} props.resolution_height - The height of the product's resolution.
 * @param {string|number} props.resolution_width - The width of the product's resolution.
 * @param {string} props.type - The type of product, e.g., 'indoor' or 'outdoor'.
 * @param {string} props.picture_url - The URL of the product's picture.
 * @returns {JSX.Element} A JSX element representing the advertisement card.
 */
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';
import DisplayDelete from './DisplayDelete';
import DisplayProduct from './DisplayProduct';
import { useNavigate } from 'react-router-dom';

const DisplayAdCard = ({
	id,
	name,
	description,
	resolution_height,
	resolution_width,
	price_per_day,
	type,
	picture_url,
}) => {
	const navigate = useNavigate();

	const handleEdit = () => {
		navigate('/edit', {
			state: {
				id,
				name,
				description,
				resolution_height,
				resolution_width,
				price_per_day,
				type,
				picture_url,
			},
		});
	};

	return (
		<>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 h-10 w-10'>
						<img
							className='w-10 h-10 rounded-full'
							src={picture_url}
							alt={name}
						/>
					</div>
					<div className='ml-4'>
						<div className='text-sm font-medium leading-5 text-gray-900'>
							{name}
						</div>
					</div>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='text-sm leading-5 text-gray-900'>{price_per_day}</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div
					className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${type === 'indoor' ? 'bg-orange-800 text-white' : 'text-green-800 bg-green-100'}`}
				>
					{type}
				</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='text-sm leading-5 text-gray-900'>
					{resolution_height} x {resolution_width}
				</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='text-sm leading-5 text-gray-900'>
					<DisplayProduct displayId={id}>
						<CustomButton className='text-indigo-600 hover:text-indigo-900'>
							View more
						</CustomButton>
					</DisplayProduct>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='text-sm leading-5 text-gray-900'>
					<CustomButton onClick={handleEdit}>Edit</CustomButton>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
				<div className='text-sm leading-5 text-gray-900'>
					<DisplayDelete displayId={id} />
				</div>
			</td>
		</>
	);
};

DisplayAdCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price_per_day: PropTypes.string.isRequired,
	resolution_height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	resolution_width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	type: PropTypes.string.isRequired,
	picture_url: PropTypes.string.isRequired,
};

export default DisplayAdCard;
