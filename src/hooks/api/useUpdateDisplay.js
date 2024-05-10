import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import { putProduct } from '../../api/updateProduct';

const useUpdateDisplay = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { auth } = useAuth();
	const [isLoading, setLoading] = useState(false);
	const [submitError, setError] = useState(null);
	const [isSubmittedSuccessfully, setSubmittedSuccessfully] = useState(false);

	const handleSubmit = async formData => {
		setLoading(true);
		setError(null);

		try {
			const result = await putProduct({
				id: location.state.id,
				displayData: formData,
				token: auth.accessToken,
			});
			setSubmittedSuccessfully(true);
			setTimeout(() => {
				navigate('/dashboard', { state: { from: location } });
			}, 2000);
			return result;
		} catch (err) {
			setError(err.message);
			setSubmittedSuccessfully(false);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		isLoading,
		submitError,
		isSubmittedSuccessfully,
		handleSubmit,
	};
};
export default useUpdateDisplay;
