/**
 * Renders a search form with input fields for 'name' and 'type' and includes submit and reset functionality.
 * This form allows users to filter search results based on the provided criteria and reset them to default values.
 *
 * @param {Object} props - The properties passed to the SearchForm component.
 * @param {Function} props.onSubmit - Function to execute when the form is submitted to apply the search filters.
 * @param {Function} props.onReset - Function to execute when the reset button is clicked to clear all search filters.
 * @returns {JSX.Element} A form element that includes search input, type selector, and buttons to submit and reset the form.
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomButton from '../common/CustomButton';

const SearchForm = ({ onSubmit, onReset }) => {
	const [params, setParams] = useState({
		name: '',
		type: '',
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setParams(prevParams => ({
			...prevParams,
			[name]: value,
		}));
	};

	const handleReset = () => {
		setParams({
			name: '',
			type: '',
		});
		onReset();
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSubmit(params);
			}}
			className='flex flex-col md:flex-row items-center gap-4 px-4'
		>
			<div className='p-2 rounded flex items-center border border-sky-500'>
				<span className='inset-y-0 left-0 flex items-center pl-3'>
					<svg
						className='w-5 h-5 text-gray-500'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>
				</span>
				<input
					type='text'
					name='name'
					placeholder='Search'
					value={params.name}
					className='flex-1 pr-4 rounded-md form-input focus:border-indigo-600'
					onChange={handleInputChange}
				/>
			</div>
			<div className='flex items-center space-x-4'>
				<select
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					name='type'
					value={params.type}
					onChange={handleInputChange}
				>
					<option value=''>All</option>
					<option value='outdoor'>Outdoor</option>
					<option value='indoor'>Indoor</option>
				</select>
			</div>
			<CustomButton
				className='justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
				type='submit'
			>
				Search
			</CustomButton>
			<CustomButton
				className='border border-sky-500 text-sky-500 px-4 py-2 rounded hover:bg-sky-500 hover:text-white transition-colors duration-300'
				type='button'
				onClick={handleReset}
			>
				Remove Filters
			</CustomButton>
		</form>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default SearchForm;
