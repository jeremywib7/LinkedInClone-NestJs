import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {FeedPostEntity} from "./feed.post.entity";

@Entity()
export class CommentEntity extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FeedPostEntity, feedPostEntity => feedPostEntity.comments)
  feedPost: FeedPostEntity;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({default: ''})
  updateAt: string;

}
