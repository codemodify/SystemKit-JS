namespace SystemKit.Helpers {

	export function RandomInt(min: number, max: number): number {
		// var byteArray = new Uint8Array(1);
		// crypto.getRandomValues(byteArray);

		// var range = max - min + 1;
		// var maxRange = 256;

		// if (byteArray[0] >= Math.floor(maxRange / range) * range) {
		// 	return RandomInt(min, max);
		// }

		// return min + (byteArray[0] % range);

		const randomBuffer = new Uint32Array(1);
		crypto.getRandomValues(randomBuffer);

		let randomNumber = randomBuffer[0] / (0xffffffff + 1);

		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(randomNumber * (max - min + 1)) + min;
	}

	export function RandomFloat(min: number, max: number): number {
		var randomInt1 = RandomInt(min, max);
		var randomInt2 = RandomInt(0, 9999999);

		return randomInt1 + (randomInt2 / 1000000);
	}
}

