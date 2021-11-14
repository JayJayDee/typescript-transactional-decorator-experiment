import { Injectable } from '@nestjs/common';

@Injectable()
export class SQLiteConfiguration {

	private _dbName: string;

	constructor() {
		this._dbName = process.env['DB_NAME'];
	}

	public dbName(): string {
		return this._dbName;
	}
}
