import { Module } from '@nestjs/common';
import { Symbols } from '../symbol';

import { ConfigurationReader } from './configurators';
import { HttpConfiguration } from './configuration-http';
import { SQLiteConfiguration } from './configuration-sqlite';

@Module({
	providers: [
		{ provide: Symbols.IConfigurationReader, useClass: ConfigurationReader },
		SQLiteConfiguration,
		HttpConfiguration
	],
	exports: [
		SQLiteConfiguration,
		HttpConfiguration
	]
})
export class ConfigurationModule {}
