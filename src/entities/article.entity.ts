import { ArticleVO } from './article.vo';

export class ArticleEntity {

	private _articleVO: ArticleVO
	
	constructor(articleVO: ArticleVO) {
		this._articleVO = articleVO;
	}

	public get userId(): number {
		return this._articleVO.userId;
	}

	public set userId(userId: number) {
		this._articleVO.userId = userId;
	}

	public get createdAt(): Date {
		return this._articleVO.createdAt;
	}
}
