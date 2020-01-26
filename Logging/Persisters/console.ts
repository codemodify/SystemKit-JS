// import { SystemKit as sk1 } from "../../Helpers/objects"
// import { SystemKit as sk2 } from "../../Helpers/strings"
// import { SystemKit as sk3 } from "../Contracts/contracts"
// import { SystemKit as sk4 } from "../local-house-keeping/house-keeping"

namespace SystemKit.Logging.Persisters {
	// aliasing
	import helpersObjects = SystemKit.Helpers;
	import helpersStrings = SystemKit.Helpers;
	import loggingC = SystemKit.Logging.Contracts;
	import housekeeping = SystemKit.Logging.housekeeping;

	export class consoleLogger implements loggingC.Logger {
		public logUntil: loggingC.LogType;

		public Log(logEntry: loggingC.LogEntry) {
			var thisRef = this;

			if (logEntry.Type == loggingC.LogType.TypeDisable) {
				return;
			}

			if (logEntry.Type > thisRef.logUntil &&
				logEntry.Type != loggingC.LogType.TypeTrace) {
				return
			}

			if (logEntry.Type == loggingC.LogType.TypeTrace) {
				console.trace(logEntry.Message);
			} else if (logEntry.Type < loggingC.LogType.TypeWarning) {
				console.error(logEntry.Message);
			} else if (logEntry.Type == loggingC.LogType.TypeWarning) {
				console.warn(logEntry.Message);
			} else if (logEntry.Type == loggingC.LogType.TypeInfo) {
				console.info(logEntry.Message);
			} else if (logEntry.Type == loggingC.LogType.TypeDebug) {
				console.debug(logEntry.Message);
			} else {
				console.log(logEntry.Message);
			}
		}

		public constructor(init?: Partial<consoleLogger>) {
			(<any>Object).assign(this, init);
		}
	}

	export function NewConsoleLogger(logUntil: loggingC.LogType): loggingC.Logger {
		return new consoleLogger({
			logUntil: logUntil
		})
	}
}