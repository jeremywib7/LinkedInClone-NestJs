import {FeedPostEntity} from "./feed.post.entity";

export class Comment {
  id: number;
  feedPost: FeedPostEntity;
  createdAt: Date;
  updateAt: string;
}
