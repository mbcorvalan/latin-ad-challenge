import { formatLabel } from '../../utils/formatLabel';
import { describe, expect, it } from 'vitest';

describe('formatLabel function', () => {
	it('should format label correctly', () => {
		const input = 'hello_world_example';
		const expectedOutput = 'Hello World Example';

		const result = formatLabel(input);
		expect(result).toBe(expectedOutput);
	});

	it('should handle edge cases', () => {
		const input = '__MY_NAME_IS__';
		const expectedOutput = 'My Name Is';

		const result = formatLabel(input);

		expect(result).toBe(expectedOutput);
	});
});
