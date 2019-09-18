export class StringCalculator {
	public add(numbers: string): number {
		const arr = numbers.split(',');
		if (arr.length <= 1) { return Number(numbers); }

		return Number(arr[0]) + Number(arr[1]);
	}
}
