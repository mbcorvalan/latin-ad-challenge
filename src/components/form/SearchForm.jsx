// SearchForm.js
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
		setParams({
			...params,
			[name]: value,
		});
	};

	const handleReset = () => {
		setParams({
			name: '',
			type: '',
		});
		onReset(); // Llamar a la función de restablecimiento de filtros
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSubmit(params);
			}}
		>
			<input
				type='text'
				name='name'
				placeholder='Buscar por nombre'
				value={params.name}
				onChange={handleInputChange}
			/>
			<select name='type' value={params.type} onChange={handleInputChange}>
				<option value=''>Todos</option>
				<option value='outdoor'>Outdoor</option>
				<option value='indoor'>Indoor</option>
			</select>
			<CustomButton type='submit'>Buscar</CustomButton>
			<CustomButton type='button' onClick={handleReset}>
				Borrar filtros
			</CustomButton>
		</form>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export default SearchForm;
