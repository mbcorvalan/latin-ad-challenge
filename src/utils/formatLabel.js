export const formatLabel = name => {
	return name
		.replace(/_/g, ' ')
		.replace(/([A-Z])/g, ' $1')
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};
