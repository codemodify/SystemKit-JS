import { SystemKit as sk1 } from "../Helpers/objects"
import { SystemKit as sk2 } from "./contracts"

// aliasing
import helpersObjects = sk1.Helpers;
import configContracts = sk2.Config;

export namespace SystemKit.Config {

	export class LocalStoragePersister implements configContracts.IPersister {
		private _key: string = "";

		constructor(key: string) {
			this._key = key;
		}

		public Save(data: any, done) {
			try {
				var dataAsString = JSON.stringify(data);
				localStorage.setItem(this._key, dataAsString);

				done();
			}
			catch (ex) {
				done.fail(ex);
			}
		}

		public Read(dataContainer: any, done) {
			var dataAsString: string = localStorage.getItem(this._key);

			if (helpersObjects.IsNullOrEmpty(dataAsString)) {
				dataContainer.data = null;
				done();
			}
			else {
				try {
					dataContainer.data = JSON.parse(dataAsString);
				}
				catch (ex) {
					dataContainer.data = null;
				}

				done();
			}
		}
	}
}