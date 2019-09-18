import { expect } from 'chai';
import 'mocha';

import { StringCalculator } from './string-calculator';

describe('String Calculator', () => {
	it('empty string returns zero', () => {
		const sut = new StringCalculator();
		const result = sut.add('');

		expect(result).to.be.equal(0);
	});

	it('just one number returns the same number', () => {
		const sut = new StringCalculator();
		const result = sut.add('9');

		expect(result).to.be.equal(9);
	});

	it('two numbers, delimited by a comma, returns the sum', () => {
		const sut = new StringCalculator();
		const result = sut.add('16,8');

		expect(result).to.be.equal(24);
	});
});
