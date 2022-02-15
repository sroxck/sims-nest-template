/*
 * @Author: Jingdongdong
 * @Date: 2022-02-13 12:05:04
 * @LastEditTime: 2022-02-13 21:25:32
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostsController } from './posts.controller';
import { Posts } from './posts.schema';
@Module({
  imports:[
    TypegooseModule.forFeature([Posts])
  ],
  controllers: [PostsController]
})
export class PostsModule {}
