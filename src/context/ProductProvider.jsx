/**
 * Provides a context for tracking and managing state changes to products in an application.
 * This component encapsulates the functionality to notify when a product has changed and to reset this state.
 * It uses a boolean flag `productChanged` to represent if any product has been modified.
 *
 * @param {Object} props - The properties passed to the ProductProvider component.
 * @param {React.ReactNode} props.children - The child components that will have access to the product change context.
 * @returns {JSX.Element} A Context.Provider that passes down product change state management functions and state to its children.
 */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProductChangeContext = createContext();

export const ProductProvider = ({ children }) => {
	const [productChanged, setProductChanged] = useState(false);

	const notifyProductChange = () => {
		setProductChanged(true);
	};
	const resetProductChange = () => {
		setProductChanged(false);
	};

	return (
		<ProductChangeContext.Provider
			value={{ productChanged, notifyProductChange, resetProductChange }}
		>
			{children}
		</ProductChangeContext.Provider>
	);
};

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProductChangeContext;
