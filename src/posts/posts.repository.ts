import { Injectable, Post } from '@nestjs/common';
import { PostDTO } from './dtos/posts.dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) { }

  createPost(data: PostDTO) {
    return this.prisma.post.create({ data });
  }

  getPosts() {
    return this.prisma.post.findMany();
  }

  getPostById(id: number) {
    return this.prisma.post.findFirst({
        where: { id }
    });
  }

  updatePostById(id: number, data: PostDTO) {
    const existingPost = this.getPostById(id);

    if(!existingPost){
      return null;
    }

    const updatedPost = this.prisma.post.update({
      where: { id },
      data: {
      title: data.title,
      text: data.text,
      image: data.image !== undefined ? data.image : undefined,
      }
    })
    return updatedPost;
  }
}
