import { SystemKit as sk1 } from "../Helpers/objects"
import { SystemKit as sk2 } from "../Helpers/strings"
import { SystemKit as sk3 } from "./Contracts/contracts"
import { SystemKit as sk4 } from "./local-house-keeping/house-keeping"
import { SystemKit as sk5 } from "./Persisters/console"

// aliasing
import helpersObjects = sk1.Helpers;
import helpersStrings = sk2.Helpers;
import loggingC = sk3.Logging.Contracts;
import loggingP = sk5.Logging.Persisters;
import housekeeping = sk4.Logging.housekeeping;

export namespace SystemKit.Logging {

	export var instance: loggingC.EasyLogger;

	export function Instance(): loggingC.EasyLogger {
		return instance;
	}

	export function Init(logger: loggingC.EasyLogger) {
		instance = logger;
	}

	export function NewConsoleLogger(): loggingC.EasyLogger {
		return housekeeping.NewDefaultHelperImplmentation(
			loggingP.NewConsoleLogger(loggingC.LogType.TypeDebug),
		)
	}

	export function NewEasyLoggerForLogger(logger: loggingC.Logger): loggingC.EasyLogger {
		return housekeeping.NewDefaultHelperImplmentation(logger)
	}
}