import { ArticleEntity } from '../entities';

export type ArticleCreateParam = {
	userId: number;
	title: string;
	content: string;
	createdAt: Date;
};

export interface IArticleRepository {

	/**
	 * insert a new article to repository
	 * @param article ArticleCreateParam
	 */
	insertArticle(article: ArticleCreateParam): Promise<ArticleEntity>;

	/**
	 * finds a articles with given conditions from repository
	 */
	findArticles(): Promise<ArticleEntity[]>;
}
