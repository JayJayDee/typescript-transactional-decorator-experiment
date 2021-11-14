import { Inject, Injectable } from '@nestjs/common';
import { Symbols } from '../symbols';

import { IConfigurationReader } from './configurators/configuration-reader.interface';

@Injectable()
export class SQLiteConfiguration {

	private _dbName: string;

	constructor(
		@Inject(Symbols.IConfigurationReader) reader: IConfigurationReader
	) {
		this._dbName = <string> reader.readMantatory('SQLITE_DATABASE_NAME');
	}

	public dbName(): string {
		return this._dbName;
	}
}
