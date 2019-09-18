export class StringCalculator {
	private _numberOfTimesCalled = 0;

	public getCalledCount(): number {
		return this._numberOfTimesCalled;
	}

	public add(numbersString: string): number {
		this._numberOfTimesCalled++;

		let delimiter = ',';
		if (numbersString.indexOf('//') !== -1) {
			delimiter = numbersString.charAt(2);
			numbersString = numbersString.substring(3);
		}

		const numbers = this.convertToNumbersArr(numbersString, delimiter);
		this.validateNumbers(numbers);

		return numbers.reduce((prev, curr) => prev + curr, 0);
	}

	private validateNumbers(numbers: number[]) {
		const negativeNumbers = numbers.filter((nbr) => nbr < 0);

		if (negativeNumbers.length > 0) {
			const errDetail = negativeNumbers.join(', ');
			throw new Error(`negatives not allowed: ${errDetail}`);
		}
	}

	private convertToNumbersArr(str: string, delimiter: string): number[] {
		const regex = new RegExp(`[\n${delimiter}]+`);
		return str.split(regex).map(val => Number(val));
	}
}
