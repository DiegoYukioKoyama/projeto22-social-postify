import { Body, Injectable, NotFoundException, Post } from '@nestjs/common';
import { PostDTO } from './dtos/posts.dtos';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) { }

  async createPost(body: PostDTO) {
    return await this.repository.createPost(body);
  }

  async getPosts() {
    return await this.repository.getPosts();
  }

  async getPostById(id: number) {
    const post = await this.repository.getPostById(id);
    if(!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async updatePostById(id: number, Body: PostDTO) {
    const updatepost = await this.repository.updatePostById(id, Body);
    if(!updatepost) {
      throw new NotFoundException();
    }
    return updatepost;
  }
}
