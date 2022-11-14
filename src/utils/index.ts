export class Utils {
	public static getRandomArrayElement = <T>(array: T[]): T => {
		return array[Math.floor(Math.random() * array.length)];
	}

	public static handleText(text: string | string[]): string {
		if (Array.isArray(text)) {
			return this.getRandomArrayElement(text);
		}

		return text;
	}
}
