import { Module } from '@nestjs/common';
import { RepositoryModule, ArticleRepositoryRdb } from '../repository';
import { Symbols } from '../symbol';
import { ArticleService } from './article-service';

@Module({
	imports: [
		RepositoryModule
	],
	providers: [
		{ provide: Symbols.IArticleRepository, useClass: ArticleRepositoryRdb },		
		ArticleService
	],
	exports: [
		ArticleService
	]
})
export class ArticleModule {}
