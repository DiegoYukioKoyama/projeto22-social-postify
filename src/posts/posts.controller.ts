import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDTO } from './dtos/posts.dtos';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) { }

  @Post()
  createPost(@Body() body: PostDTO) {
  return this.postService.createPost(body);
  }

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get("/:id")
  getPostById(@Param("id", ParseIntPipe) id: number) {
    try {
        return this.postService.getPostById(id);
    } catch (error) {
        return error;
    }
  }

  @Put("/:id")
  updatePostById(@Param("id", ParseIntPipe) id: number, @Body() body: PostDTO) {
    try {
      return this.postService.updatePostById(id, body);
    } catch (error) {
      return error;
    }
  }
}
