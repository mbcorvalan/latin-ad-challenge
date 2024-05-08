import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';
import DisplayDelete from '../display/DisplayDelete';

function DisplayAdCard({
	id,
	name,
	description,
	price_per_day,
	resolution_height,
	resolution_width,
	type,
	// picture_url,
}) {
	return (
		<div>
			{/* <img src={picture_url} alt={name} /> */}
			<h2>{name}</h2>
			<p>{description}</p>
			<div>
				<p>Precio por día: ${price_per_day}</p>
				<p>
					Resolución: {resolution_height} x {resolution_width}
				</p>
				<p>Tipo: {type}</p>
				<CustomButton onClick={() => console.log('Mirar Producto')}>
					Mirar Producto
				</CustomButton>
				<CustomButton onClick={() => console.log('Editar')}>
					Editar
				</CustomButton>
				<DisplayDelete displayId={id}></DisplayDelete>
			</div>
		</div>
	);
}

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
	// picture_url: PropTypes.string.isRequired,
};

export default DisplayAdCard;
