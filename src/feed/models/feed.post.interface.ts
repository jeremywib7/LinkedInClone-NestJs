export interface FeedPost {
  id?:number;
  body?: string;
  createdAt?: Date;
  comments: Comment[];
}
