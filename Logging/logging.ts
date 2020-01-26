// import { SystemKit as sk1 } from "../Helpers/objects"
// import { SystemKit as sk2 } from "../Helpers/strings"
// import { SystemKit as sk3 } from "./Contracts/contracts"
// import { SystemKit as sk4 } from "./local-house-keeping/house-keeping"
// import { SystemKit as sk5 } from "./Persisters/console"

/// <reference path="./Contracts/contracts.ts" />
/// <reference path="./Persisters/console.ts" />
/// <reference path="./local-house-keeping/house-keeping.ts" />

namespace SystemKit.Logging {
	// aliasing
	import helpersObjects = SystemKit.Helpers;
	import helpersStrings = SystemKit.Helpers;
	import loggingC = SystemKit.Logging.Contracts;
	import loggingP = SystemKit.Logging.Persisters;
	import housekeeping = SystemKit.Logging.housekeeping;

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