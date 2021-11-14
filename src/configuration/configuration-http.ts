import { Inject, Injectable } from '@nestjs/common';
import { Symbols } from '../symbol';

import { IConfigurationReader } from './configurators/configuration-reader.interface';

@Injectable()
export class HttpConfiguration {

	private _port: number;

	constructor(
		@Inject(Symbols.IConfigurationReader) reader: IConfigurationReader
	) {
		const portExpression = <string> reader.readMantatory('HTTP_PORT');
		this._port = Number(portExpression);
	}

	public get port(): number {
		return this._port;
	}
}
