/**
 * Renders a success message alert.
 * This component is used to indicate that an operation, such as a form submission, has been successfully completed.
 *
 * @returns {JSX.Element} A div containing a styled message that communicates successful completion of an operation.
 */
const DisplaySuccessMessage = () => {
	return (
		<div className='flex items-center justify-center m-2'>
			<div
				className='p-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
				role='alert'
			>
				<strong className='font-bold'>Success!</strong>
				<span className='block sm:inline'>
					Your form has been successfully submitted!
				</span>
			</div>
		</div>
	);
};

export default DisplaySuccessMessage;
