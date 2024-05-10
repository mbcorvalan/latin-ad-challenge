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
