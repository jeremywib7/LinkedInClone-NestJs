import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import {CommentEntity} from "./comment.entity";

@Entity('feed_post')
export class FeedPostEntity extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column()
  public_id: string;

  @Column({default: ''})
  body: string;

  @OneToMany(() => CommentEntity, commentEntity => commentEntity.feedPost, {
    cascade: true
  })
  @JoinColumn()
  comments: CommentEntity[];

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({default: ''})
  updateAt: string;

  addComment(comment: CommentEntity) {

  }

}
