import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {FeedPostEntity} from '../models/feed.post.entity';
import {FeedPost} from "../models/feed.post.interface";

@Injectable()
export class FeedService {

  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>
  ) {
  }

  async createPost(feedPost: FeedPost) {
    return await this.feedPostRepository.save(feedPost);
  }

  async findAllPosts() {
    return await this.feedPostRepository.findAndCount();
  }

  // async updatePost(id: number, feedPost: FeedPost) {
  //   return await this.feedPostRepository.update(id, feedPost);
  // }

}
