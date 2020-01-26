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

	export class memoryLogger implements loggingC.Logger {
		public logUntil: loggingC.LogType;
		public logEntries: loggingC.LogEntry[];

		public Log(logEntry: loggingC.LogEntry) {
			var thisRef = this;

			if (logEntry.Type == loggingC.LogType.TypeDisable) {
				return;
			}

			if (logEntry.Type > thisRef.logUntil &&
				logEntry.Type != loggingC.LogType.TypeTrace) {
				return
			}

			thisRef.logEntries.push(logEntry);
		}

		public constructor(init?: Partial<memoryLogger>) {
			(<any>Object).assign(this, init);
		}
	}

	export function NewMemoryLogger(logUntil: loggingC.LogType): loggingC.Logger {
		return new memoryLogger({
			logUntil: logUntil,
			logEntries: []
		})
	}
}