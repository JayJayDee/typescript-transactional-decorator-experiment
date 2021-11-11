import { Module } from '@nestjs/common';

import { Symbols } from '../symbols';
import { ArticleRepositoryRdb } from './article-repository-rdb';

@Module({
	providers: [
		{ provide: Symbols.IArticleRepository, useClass: ArticleRepositoryRdb }
	],
	exports: [
		Symbols.IArticleRepository
	]
})
export class RepositoryModule {}
