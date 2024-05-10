/**
 * Renders a loading spinner inside a button with a "Processing..." label.
 * This component is typically used to indicate that an asynchronous operation is in progress.
 *
 * @returns {JSX.Element} A div containing a button with a spinning wheel and text to indicate loading.
 */
export default function Loading() {
	return (
		<div className='m-8 flex items-center justify-center '>
			<button
				type='button'
				className='bg-sky-500 h-max w-max rounded-lg text-white font-bold hover:bg-sky-700 hover:cursor-not-allowed duration-[500ms,800ms]'
				disabled=''
			>
				<div className='flex items-center justify-center m-[10px]'>
					<div className='h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4'></div>
					<div className='ml-2'>
						Processing... <div></div>
					</div>
				</div>
			</button>
		</div>
	);
}
