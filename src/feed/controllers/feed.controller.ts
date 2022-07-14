import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {FeedService} from "../services/feed.service";
import {FeedPost} from "../models/feed.post.interface";

@Controller('v1/feed')
export class FeedController {

  constructor(
    private feedService: FeedService
  ) {
  }

  @Post()
  createPost(@Body() feedPost: FeedPost) {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  findAllPosts() {
    return this.feedService.findAllPosts();
  }

  // @Put(':id')
  // updatePost(
  //   @Param('id') id: number,
  //   @Body() feedPost: FeedPost) {
  //   return this.feedService.updatePost(id, feedPost);
  // }

}
