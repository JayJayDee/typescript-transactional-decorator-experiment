import { Module } from '@nestjs/common';

import { ConfigurationModule } from '../configuration';
import { ArticleRepositoryRdb } from './article-repository-rdb';

@Module({
	imports: [
		ConfigurationModule
	],
	providers: [
		ArticleRepositoryRdb
	],
	exports: [
		ArticleRepositoryRdb
	]
})
export class RepositoryModule {}
