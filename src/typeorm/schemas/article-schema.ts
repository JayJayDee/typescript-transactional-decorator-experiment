import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class ArticleSchema {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column({
		nullable: false,
		comment: 'User ID'
	})
	public userId: number;

	@CreateDateColumn({
		type: 'timestamp'
	})
	public createdAt: Date;
}
