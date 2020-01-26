
// import { SystemKit as sk1 } from "./objects";

namespace SystemKit.Helpers {
	// aliasing
	import helpersObjects = SystemKit.Helpers;

	export function Replace(originalString: string, stringToFind: string, replacingString: string, count: number): string {
		var resultString = originalString;

		while (Contains(originalString, stringToFind)) {
			var index = originalString.indexOf(stringToFind);
			var firstPart = resultString.substring(0, index - 1);
			var secondPart = resultString.substring(index + 1, resultString.length - firstPart.length - 1);
			resultString = firstPart + replacingString + secondPart;
		}

		return resultString;
	}

	export function ReplaceAll(originalString: string, stringToFind: string, replacingString: string): string {
		if (helpersObjects.IsNullOrEmpty(originalString)) {
			return "";
		}

		// Escape things => http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript/3561711
		stringToFind = stringToFind.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		return originalString.replace(new RegExp(stringToFind, 'g'), replacingString);
	}

	export function ReplaceAllInArray(originalString: string, stringsToFind: string[], replacingString: string): string {
		var result = originalString;
		for (var i = 0; i < stringsToFind.length; i++) {
			result = ReplaceAll(result, stringsToFind[i], replacingString);
		}
		return result;
	}

	export function RemoveIfExistsAtEnd(originalString: string, stringToFind: string): string {
		if (helpersObjects.IsNullOrEmpty(originalString)) {
			return "";
		}
		var newSubstringLength = (originalString.length - stringToFind.length);
		if (originalString.lastIndexOf(stringToFind) === newSubstringLength) {
			return originalString.substring(0, newSubstringLength);
		}
		return originalString;
	}

	export function StartsWith(originalString: string, stringToFind: string): boolean {
		if (helpersObjects.IsNullOrEmpty(originalString)) {
			return false;
		}
		if (originalString.indexOf(stringToFind) === 0) {
			return true;
		}
		return false;
	}

	export function EndsWith(originalString: string, stringToFind: string): boolean {
		if (helpersObjects.IsNullOrEmpty(originalString)) {
			return false;
		}
		var newSubstringLength = (originalString.length - stringToFind.length);
		if (originalString.lastIndexOf(stringToFind) === newSubstringLength) {
			return true;
		}
		return false;
	}

	export function Contains(originalString: string, stringToFind: string): boolean {
		if (helpersObjects.IsNullOrEmpty(originalString)
			|| helpersObjects.IsNullOrEmpty(stringToFind)) {
			return false;
		}

		return (originalString.indexOf(stringToFind) !== -1);
	}
}