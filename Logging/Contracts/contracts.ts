export namespace SystemKit.Logging.Contracts {

	export enum LogType {
		TypeDisable = 0,  // 0
		TypeTrace, // 1 - log this no matter what
		TypePanic,
		TypeFatal,
		TypeError,
		TypeWarning,
		TypeInfo,
		TypeDebug, // 7
	}

	export var LogTypeAsString = [
		"Disable",
		"TRACE",
		"FWORD",
		"OSHIT",
		"ERROR",
		"OOOPS",
		"INFOO",
		"DEBUG"
	];

	export type Fields = any;

	export class LogEntry {
		public Time: number;    // time.Now()
		public Type: LogType;   // TypeDisable .. -> .. TypeDebug
		public Tag: string;     // "This-Is-A-Tag"
		public Level: number;   // Ex: parentMethod - level 0, childMethod() - level 1, useful for concurrent sorted logging with call-stack alike
		public Message: string; //

		public constructor(init?: Partial<LogEntry>) {
			(<any>Object).assign(this, init);
		}
	}

	export interface Logger {
		Log(logEntry: LogEntry);
	}

	export interface EasyLogger extends Logger {
		KeepOnlyLogs(logTypes: LogType[])

		LogPanicWithTagAndLevel(tag: string, level: number, message: string)
		LogFatalWithTagAndLevel(tag: string, level: number, message: string)
		LogErrorWithTagAndLevel(tag: string, level: number, message: string)
		LogWarningWithTagAndLevel(tag: string, level: number, message: string)
		LogInfoWithTagAndLevel(tag: string, level: number, message: string)
		LogDebugWithTagAndLevel(tag: string, level: number, message: string)
		LogTraceWithTagAndLevel(tag: string, level: number, message: string)

		LogPanic(message: string)
		LogFatal(message: string)
		LogError(message: string)
		LogWarning(message: string)
		LogInfo(message: string)
		LogDebug(message: string)
		LogTrace(message: string)

		LogPanicWithFields(fields: Fields)
		LogFatalWithFields(fields: Fields)
		LogErrorWithFields(fields: Fields)
		LogWarningWithFields(fields: Fields)
		LogInfoWithFields(fields: Fields)
		LogDebugWithFields(fields: Fields)
		LogTraceWithFields(fields: Fields)
	}
}
