import { expect } from 'chai';
import 'mocha';

import { StringCalculator } from './string-calculator';

describe('String Calculator', () => {
	it('empty string returns zero', () => {
		const sut = new StringCalculator();
		const result = sut.add('');

		expect(result).to.be.equal(0);
	});
});
