export namespace SystemKit.Config {
	export interface IPersister {
		Save(data: any, done);
		Read(dataContainer: any, done);
	}

	export interface Config {
		CreateOrReturnInstance(): Config
		DefaultConfig(): Config
		String(): string
	}
}