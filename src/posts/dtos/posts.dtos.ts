import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class PostDTO {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  text: string

  @IsString()
  @IsOptional()
  image: string
}