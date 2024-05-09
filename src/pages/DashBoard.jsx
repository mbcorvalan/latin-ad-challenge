import useDashboardData from '../hooks/state/useDashboardData';
import SearchForm from '../components/form/SearchForm';
import PaginationControls from '../components/pagination/PaginationControls';
import DisplayList from '../components/display/DisplayList';
import DisplayLoading from '../components/display/DisplayLoading';
import { useNavigate, useLocation } from 'react-router-dom';
import DisplayErrorMsg from '../components/display/DisplayErrorMsg';
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
		<div className='flex h-screen bg-gray-200'>
			<div className='flex flex-col flex-1 overflow-hidden'>
				<header className='w-full px-6 py-4 bg-white border-b-4 border-sky-500 flex justify-between items-center'>
					<div className='flex items-center'>
						<SearchForm
							params={params}
							onSubmit={handleSubmit}
							onReset={handleResetFilters}
						/>
					</div>
					<CustomButton
						className='border border-sky-500 text-sky-500 px-4 py-2 rounded hover:bg-sky-500 hover:text-white transition-colors duration-300'
						type='button'
						onClick={handleCreateProduct}
					>
						Create New Display
					</CustomButton>
				</header>

				<main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
					<div className='container px-6 py-8 mx-auto'>
						<h1 className='text-3xl font-medium text-gray-700'>Dashboard</h1>
						{loading && <DisplayLoading />}
						<div className='flex flex-col mt-8'>
							<div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
								{displays?.length > 0 && (
									<>
										<div className='inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
											<table className='min-w-full'>
												<thead>
													<tr>
														<th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
															Name
														</th>
														<th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
															Price Per Day
														</th>
														<th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
															Type
														</th>
														<th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
															Resolution
														</th>
														<th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
														<th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
														<th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
													</tr>
												</thead>
												<tbody className='bg-white'>
													{displays?.length > 0 && (
														<DisplayList displays={displays} />
													)}
												</tbody>
											</table>
										</div>
									</>
								)}
								{!loading && !error && displays?.length === 0 && (
									<DisplayErrorMsg errorMsg='No result found' />
								)}
							</div>
							<PaginationControls
								currentPage={currentPage}
								totalPages={totalPages}
								onNext={nextPage}
								onPrev={prevPage}
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default DashBoard;
