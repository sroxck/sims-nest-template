/*
 * @Author: Jingdongdong
 * @Date: 2022-02-13 12:33:48
 * @LastEditTime: 2022-02-20 08:42:45
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreatePostsDto, UpdatePostsDto } from './posts.dto';
import { Posts } from './posts.schema';

@Controller('posts')
@ApiTags('病例模板')
export class PostsController {
  constructor(@InjectModel(Posts) private readonly postModel:ModelType<Posts>){}
  @Get()
  @ApiOperation({ summary: "全部病例模板" })
  async index() { 
    return await this.postModel.find()
  }


  @Post('create')
  @ApiOperation({ summary: "创建模板" })
  async create(@Body() cretePostDto: CreatePostsDto) {
    await this.postModel.create(cretePostDto)
    return {
      success:true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: "病例详情" })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id)
  }
  
  @Put(':id')
  @ApiOperation({ summary: "更新病例" })
  async update(@Param('id') id:string,@Body() updatePostDtp:UpdatePostsDto) {
    await this.postModel.findByIdAndUpdate(id,updatePostDtp)
    return {success:true}
  }
  
  @Delete(':id')
  @ApiOperation({summary: "删除病例"})
  async remove(@Param('id') id:string){
    await this.postModel.findByIdAndRemove(id)
    return {success:true}
  }
}
