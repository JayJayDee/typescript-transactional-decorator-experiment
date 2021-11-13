import { Injectable } from '@nestjs/common';

import { ArticleEntity } from '../entities';
import { ArticleCreateParam, IArticleRepository } from './article-repository.interface';

@Injectable()
export class ArticleRepositoryRdb implements IArticleRepository {

	public async insertArticle(article: ArticleCreateParam): Promise<ArticleEntity> {
		const createdArticle = new ArticleEntity({
			articleId: 1,
			userId: article.userId,
			title: article.title,
			content: article.content,
			createdAt: new Date()
		});
		return await Promise.resolve<ArticleEntity>(createdArticle);
	}

	public async findArticles(): Promise<ArticleEntity[]> {
		const articles: ArticleEntity[] = [];
		return articles;
	}
}
