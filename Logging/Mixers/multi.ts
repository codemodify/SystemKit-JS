import { SystemKit as sk1 } from "../../Helpers/objects"
import { SystemKit as sk2 } from "../../Helpers/strings"
import { SystemKit as sk3 } from "../Contracts/contracts"
import { SystemKit as sk4 } from "../local-house-keeping/house-keeping"

// aliasing
import helpersObjects = sk1.Helpers;
import helpersStrings = sk2.Helpers;
import loggingC = sk3.Logging.Contracts;
import housekeeping = sk4.Logging.housekeeping;

export namespace SystemKit.Logging.Persisters {

	export class multiLogger implements loggingC.Logger {
		public loggers: loggingC.Logger[];

		public Log(logEntry: loggingC.LogEntry) {
			var thisRef = this;

			for (var i = 0; i < thisRef.loggers.length; i++) {
				thisRef.loggers[i].Log(logEntry);
			}
		}

		public constructor(init?: Partial<multiLogger>) {
			(<any>Object).assign(this, init);
		}
	}

	export function NewMultiLogger(loggers: loggingC.Logger[]): loggingC.Logger {
		return new multiLogger({
			loggers: loggers
		})
	}
}