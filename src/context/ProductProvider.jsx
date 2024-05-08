import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context
const ProductChangeContext = createContext();

// Context provider component
export const ProductProvider = ({ children }) => {
	const [productChanged, setProductChanged] = useState(false);

	// Function to trigger when product list changes
	const notifyProductChange = () => {
		setProductChanged(true);
	};

	// Function to reset the notification
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
