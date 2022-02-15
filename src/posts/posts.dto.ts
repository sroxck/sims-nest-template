/*
 * @Author: Jingdongdong
 * @Date: 2022-02-13 20:01:11
 * @LastEditTime: 2022-02-13 21:17:04
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostsDto {
  @ApiProperty({ description: "模板名称",example:'胃炎' })
  @IsNotEmpty({message:'请填写模板名称'})
  title: string
  
  @ApiProperty({ description: "模板字符串",example:'胃炎模板内容' })
  @IsNotEmpty({message:'请填写模板字符串'})
  HTMLStr: string
}

export class UpdatePostsDto {
  @ApiProperty({ description: "模板名称" })
  title: string
  @ApiProperty({ description: "模板字符串" })
  HTMLStr: string
}
 