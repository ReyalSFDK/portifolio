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

	public static getColorFromString(str: string): string {
		let color = "#";
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}

		for (let i = 0; i < 3; i++) {
			let value = (hash >> (i * 8)) & 0xFF;
			color += ("00" + value.toString(16)).substr(-2)
		}

		return color;
	}
}
