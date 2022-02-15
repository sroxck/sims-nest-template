/*
 * @Author: Jingdongdong
 * @Date: 2022-02-11 18:05:51
 * @LastEditTime: 2022-02-13 21:46:30
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
@Module({
  imports: [
    PostsModule,
    TypegooseModule.forRoot("mongodb://localhost/nest-micoweb-api")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 