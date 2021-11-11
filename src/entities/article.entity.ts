import { ArticleVO } from './article.vo';

export class ArticleEntity {

	private _articleVO: ArticleVO
	
	constructor(articleVO: ArticleVO) {
		this._articleVO = articleVO;
	}

	public get articleId(): number {
		return this._articleVO.articleId;
	}

	public get userId(): number {
		return this._articleVO.userId;
	}

	public get title(): string {
		return this._articleVO.title;
	}

	public set title(title: string) {
		this._articleVO.title = title;
	}

	public get content(): string {
		return this._articleVO.content;
	}

	public set content(content: string) {
		this._articleVO.content = content;
	}

	public get createdAt(): Date {
		return this._articleVO.createdAt;
	}
}
