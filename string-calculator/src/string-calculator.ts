export class StringCalculator {
	public add(numbersString: string): number {
		const numbers = this.convertToNumbersArr(numbersString);
		return numbers.reduce((prev, curr) => prev + curr, 0);
	}

	private convertToNumbersArr(str: string): number[] {
		return str.split(/[\n,]+/).map(val => Number(val));
	}
}
