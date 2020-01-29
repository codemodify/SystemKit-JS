namespace SystemKit.Helpers {

	export function IsNullOrEmpty(object: any): boolean {
		// Quick Check
		if ((object === null)
			|| (object === undefined)
			|| (object === "undefined"))
			return true;

		// [] or ""
		if (object.constructor === Array || object.constructor === String)
			return (object.length === 0);

		// {}
		if (object.constructor === Object) {
			var propertiesCount = 0;
			for (var propertyName in object) {
				propertiesCount++;
				break;
			}

			return (propertiesCount === 0)
		}

		// Anything else (seems only "Number" & "Function" is left but those would be excluded at first IF)
		return false;
	}

	export function CloneObject(object: any): any {
		return JSON.parse(JSON.stringify(object));
	}

	export function CloneObjectLowerMemberFirstChar(o) {
		var newO, origKey, newKey, value;

		// array
		if (o instanceof Array) {
			return o.map(function (value) {
				if (typeof value === "object") {
					value = CloneObjectLowerMemberFirstChar(value)
				}
				return value
			})
		}

		// object
		newO = {}
		for (origKey in o) {
			if (o.hasOwnProperty(origKey)) {
				newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
				value = o[origKey]
				if (value instanceof Array || (value !== null && value.constructor === Object)) {
					value = CloneObjectLowerMemberFirstChar(value)
				}
				newO[newKey] = value
			}
		}

		return newO
	}

	export function CloneObjectUpperMemberFirstChar(o) {
		var newO, origKey, newKey, value;

		// array
		if (o instanceof Array) {
			return o.map(function (value) {
				if (typeof value === "object") {
					value = CloneObjectUpperMemberFirstChar(value)
				}
				return value
			})
		}

		// object
		newO = {}
		for (origKey in o) {
			if (o.hasOwnProperty(origKey)) {
				newKey = (origKey.charAt(0).toUpperCase() + origKey.slice(1) || origKey).toString()
				value = o[origKey]
				if (value instanceof Array || (value !== null && value.constructor === Object)) {
					value = CloneObjectUpperMemberFirstChar(value)
				}
				newO[newKey] = value
			}
		}

		return newO
	}
}