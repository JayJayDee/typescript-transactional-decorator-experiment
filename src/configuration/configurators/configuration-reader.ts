import { Injectable } from '@nestjs/common';

import { IConfigurationReader } from './configuration-reader.interface';
import { ConfigurationNotSuppliedError } from './errors';

@Injectable()
export class ConfigurationReader implements IConfigurationReader {

	private _source: Record<string, string>;

	constructor() {
		this._source = process.env;
	}

	public readMantatory(key: string): string {
		const value = this._source[key];
		if (!value) {
			throw new ConfigurationNotSuppliedError({ key });
		}
		return value;
	}

	public readOptional(key: string, defaultValue: string): string {
		const value = this._source[key];
		if (!value) {
			return defaultValue;
		}
		return value;
	}
}
