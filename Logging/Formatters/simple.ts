import { SystemKit as sk1 } from "../../Helpers/objects"
import { SystemKit as sk2 } from "../../Helpers/strings"
import { SystemKit as sk3 } from "../Contracts/contracts"
import { SystemKit as sk4 } from "../local-house-keeping/house-keeping"

// aliasing
import helpersObjects = sk1.Helpers;
import helpersStrings = sk2.Helpers;
import loggingC = sk3.Logging.Contracts;
import housekeeping = sk4.Logging.housekeeping;

export module SystemKit.Logging.Formatters {
	declare var sprintf;

	export function NewSimpleFormatterLogger(logger: loggingC.Logger): loggingC.EasyLogger {
		var formatterLogger = new simpleFormatterLogger({
			loggerToSendTo: logger
		})

		return housekeeping.NewDefaultHelperImplmentation(
			formatterLogger,
		)
	}

	export class simpleFormatterLogger implements loggingC.Logger {
		public loggerToSendTo: loggingC.Logger;

		public Log(logEntry: loggingC.LogEntry) {
			var thisRef = this;

			var formattedTime = (new Date()).toISOString();
			var formattedTimeLen = formattedTime.length;
			if (formattedTimeLen < 30) {
				var spacesCount = 30 - formattedTimeLen;

				var newV = sprintf("%" + (spacesCount + 1) + "v", "Z");
				newV = helpersStrings.Replace(newV, " ", "0", spacesCount);

				formattedTime = helpersStrings.Replace(
					formattedTime,
					"Z",
					newV,
					1,
				);
			}

			var formatting = "%s | %s";
			if (logEntry.Tag.trim().length > 0) {
				formatting = formatting + " | %s";
			} else {
				formatting = formatting + " |";
			}

			if (logEntry.Level > 0) {
				formatting = formatting + sprintf(" %" + (logEntry.Level * 4) + "v", "");
				formatting += " ->";
			}
			formatting = formatting + " %s";

			if (logEntry.Tag.trim().length > 0) {
				logEntry.Message = sprintf(
					formatting,
					formattedTime,
					logEntry.Type,
					logEntry.Tag,
					logEntry.Message,
				);
			} else {
				logEntry.Message = sprintf(
					formatting,
					formattedTime,
					logEntry.Type,
					logEntry.Message,
				);
			}

			thisRef.loggerToSendTo.Log(logEntry);
		}

		public constructor(init?: Partial<simpleFormatterLogger>) {
			(<any>Object).assign(this, init);
		}
	}
}