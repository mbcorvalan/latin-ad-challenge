import { useContext } from 'react';
import ProductChangeContext from '../../context/ProductProvider';

const useProductChange = () => {
	return useContext(ProductChangeContext);
};

export default useProductChange;
