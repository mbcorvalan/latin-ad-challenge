export const formatLabel = name => {
	name = name.replace(/_+/g, '_');
	name = name.replace(/^_+|_+$/g, '');

	return name
		.split('_')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};
