// hooks/transformData.js
export const useTransformData = () => {
	const toSnakeCase = str =>
		str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

	const transformFormData = formData => {
		return Object.keys(formData).reduce((acc, key) => {
			acc[toSnakeCase(key)] = formData[key];
			return acc;
		}, {});
	};

	return transformFormData;
};
