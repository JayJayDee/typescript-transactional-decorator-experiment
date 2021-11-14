import { Module } from '@nestjs/common';

import { Symbols } from '../symbol';
import { ConfigurationReader } from './configuration-reader';

@Module({
	providers: [
		{ provide: Symbols.IConfigurationReader, useClass: ConfigurationReader }
	]
})
export class ConfigurationModule {}
