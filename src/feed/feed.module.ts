import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/feed.post.entity';
import { FeedService } from './services/feed.service';
import {FeedController} from "./controllers/feed.controller";
import {CommentEntity} from "./models/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity, CommentEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
