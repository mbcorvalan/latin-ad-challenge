/**
 * Component that wraps its children in a clickable div which navigates to a specified display detail page.
 * This is commonly used to make entire areas or components clickable, directing the user to more detailed information about a product or item.
 *
 * @param {Object} props - The properties passed to the DisplayProduct component.
 * @param {number} props.displayId - The unique identifier of the display, used to navigate to its detailed view.
 * @param {React.ReactNode} props.children - The child elements to render inside the clickable div.
 * @returns {JSX.Element} A div that, when clicked, navigates to the detail page of a specific display.
 */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export default function DisplayProduct({ displayId, children }) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/display/${displayId}`);
	};

	return <div onClick={handleNavigate}>{children}</div>;
}

DisplayProduct.propTypes = {
	displayId: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};
