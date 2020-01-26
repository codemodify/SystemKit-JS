
// import { SystemKit as sk1 } from "../../Helpers/objects"
// import { SystemKit as sk2 } from "../../Helpers/strings"
// import { SystemKit as sk3 } from "../Contracts/contracts"

namespace SystemKit.Logging.housekeeping {
	// aliasing
	import helpersObjects = SystemKit.Helpers;
	import helpersStrings = SystemKit.Helpers;
	import loggingC = SystemKit.Logging.Contracts;

	export class defaultHelperImplmentation implements loggingC.EasyLogger {
		public loggerToSendTo: loggingC.Logger;
		public logTypes: loggingC.LogType[];

		// `Logger` interface
		Log(logEntry: loggingC.LogEntry) {
			var thisRef = this;

			thisRef.loggerToSendTo.Log(logEntry);
		}

		// `EasyLogger` interface
		KeepOnlyLogs(logTypes: loggingC.LogType[]) {
			var thisRef = this;

			thisRef.logTypes = logTypes;
		}

		// `EasyLogger` interface
		LogPanicWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypePanic,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogFatalWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeFatal,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogErrorWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeError,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogWarningWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeWarning,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogInfoWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeInfo,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogDebugWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeDebug,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}
		LogTraceWithTagAndLevel(tag: string, level: number, message: string) {
			var thisRef = this;

			thisRef.Log(new loggingC.LogEntry({
				Time: (new Date()).getTime(),
				Type: loggingC.LogType.TypeTrace,
				Tag: tag,
				Level: level,
				Message: message,
			}))
		}

		// `EasyLogger` interface
		LogPanic(message: string) {
			var thisRef = this;

			thisRef.LogPanicWithTagAndLevel("", 0, message)
		}
		LogFatal(message: string) {
			var thisRef = this;

			thisRef.LogFatalWithTagAndLevel("", 0, message)
		}
		LogError(message: string) {
			var thisRef = this;

			thisRef.LogErrorWithTagAndLevel("", 0, message)
		}
		LogWarning(message: string) {
			var thisRef = this;

			thisRef.LogWarningWithTagAndLevel("", 0, message)
		}
		LogInfo(message: string) {
			var thisRef = this;

			thisRef.LogInfoWithTagAndLevel("", 0, message)
		}
		LogDebug(message: string) {
			var thisRef = this;

			thisRef.LogDebugWithTagAndLevel("", 0, message)
		}
		LogTrace(message: string) {
			var thisRef = this;

			thisRef.LogTraceWithTagAndLevel("", 0, message)
		}

		// `EasyLogger` interface
		LogPanicWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogPanicWithTagAndLevel("", 0, data)
		}
		LogFatalWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogFatalWithTagAndLevel("", 0, data)
		}
		LogErrorWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogErrorWithTagAndLevel("", 0, data)
		}
		LogWarningWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogWarningWithTagAndLevel("", 0, data)
		}
		LogInfoWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogInfoWithTagAndLevel("", 0, data)
		}
		LogDebugWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogDebugWithTagAndLevel("", 0, data)
		}
		LogTraceWithFields(fields: loggingC.Fields) {
			var thisRef = this;

			var data = JSON.stringify(fields);
			thisRef.LogTraceWithTagAndLevel("", 0, data)
		}
	}

	export function NewDefaultHelperImplmentation(logger: loggingC.Logger): loggingC.EasyLogger {
		var di = new defaultHelperImplmentation();
		di.loggerToSendTo = logger;
		di.logTypes = [
			loggingC.LogType.TypePanic,
			loggingC.LogType.TypeFatal,
			loggingC.LogType.TypeError,
			loggingC.LogType.TypeWarning,
			loggingC.LogType.TypeInfo,
			loggingC.LogType.TypeDebug
		];

		return di;
	}
}