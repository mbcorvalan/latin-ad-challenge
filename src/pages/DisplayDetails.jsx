import { useParams } from 'react-router-dom';
import useDisplayProduct from '../hooks/api/useDisplayProduct';
import CustomButton from '../components/common/CustomButton';
import DisplayDetailsCard from '../components/display/DisplayDetailsCard';
import { useNavigate, useLocation } from 'react-router-dom';

function DisplayDetails() {
	const { displayId } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const { displayData, loading, error } = useDisplayProduct(displayId);

	return (
		<div>
			<h1>Display Details</h1>
			{loading && <p>Loading...</p>}
			{displayData && <DisplayDetailsCard displayData={displayData} />}
			{error && <p>{error}</p>}
			<CustomButton
				onClick={() => navigate('/dashboard', { state: { from: location } })}
			>
				Volver al dashboard
			</CustomButton>
		</div>
	);
}

export default DisplayDetails;
