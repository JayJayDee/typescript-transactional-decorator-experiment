import { Inject } from '@nestjs/common';
import { IArticleRepository } from '../repository';
import { Symbols } from '../symbols';

export class ArticleService {

	private _articleRepository: IArticleRepository;

	constructor(
		@Inject(Symbols.IArticleRepository) articleRepository: IArticleRepository
	) {
		this._articleRepository = articleRepository;
		this._articleRepository;
	}
}
