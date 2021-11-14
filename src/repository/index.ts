import { IArticleRepository } from './article-repository.interface';
import { ArticleRepositoryRdb } from './article-repository-rdb';
import { RepositoryModule } from './repository.module';

export {
	RepositoryModule,
	IArticleRepository, ArticleRepositoryRdb,
};
