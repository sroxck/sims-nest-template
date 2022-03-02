/*
 * @Author: Jingdongdong
 * @Date: 2022-02-11 18:05:51
 * @LastEditTime: 2022-03-02 18:11:18
 * @LastEditors: Jingdongdong
 * @Description:  
 */
import { Controller, Get } from '@nestjs/common'; 
import { AppService } from './app.service'; 
import { ApiTags } from '@nestjs/swagger'
@Controller()
@ApiTags('全局')
export class AppController {
  constructor(private readonly appService: AppService) {} 

  @Get()  
  getHello(): string {
    
    return '333'
  }
  @Get('home')
  index(){
    return "home"
  }
}

