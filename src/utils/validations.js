export const validateField = (name, value) => {
	if (!value.trim()) {
		return `Please enter a ${name}`;
	}

	switch (name) {
		case 'name':
			if (value.length > 255) {
				return `${name} must be less than 256 characters`;
			}
			break;
		case 'pricePerDay':
		case 'resolutionHeight':
		case 'resolutionWidth':
			if (!/^\d+$/.test(value)) {
				return `Please enter a valid integer for ${name}`;
			}
			break;
		case 'type':
			if (!['indoor', 'outdoor'].includes(value)) {
				return 'Please select a valid type';
			}
			break;
		default:
			break;
	}
	return '';
};
