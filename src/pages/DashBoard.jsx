import useDashboardData from '../hooks/state/useDashboardData';
import SearchForm from '../components/form/SearchForm';
import PaginationControls from '../components/pagination/PaginationControls';
import DisplayList from '../components/display/DisplayList';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomButton from '../components/common/CustomButton';

const DashBoard = () => {
	const {
		params,
		displays,
		loading,
		error,
		handleSubmit,
		handleResetFilters,
		nextPage,
		prevPage,
		totalPages,
	} = useDashboardData();

	const navigate = useNavigate();
	const location = useLocation();

	const handleCreateProduct = () => {
		navigate('/createDisplay', { state: { from: location } });
	};

	const currentPage = params.currentPage || 1;

	return (
		<div>
			<h1>Dashboard</h1>
			<CustomButton onClick={handleCreateProduct}>
				Crear nuevo producto
			</CustomButton>
			<SearchForm
				params={params}
				onSubmit={handleSubmit}
				onReset={handleResetFilters}
			/>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && displays?.length === 0 && (
				<p>No se encontraron resultados.</p>
			)}
			{displays?.length > 0 && (
				<>
					<DisplayList displays={displays} />
					<PaginationControls
						currentPage={currentPage}
						totalPages={totalPages}
						onNext={nextPage}
						onPrev={prevPage}
					/>
				</>
			)}
		</div>
	);
};

export default DashBoard;
