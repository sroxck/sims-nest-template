/*
 * @Author: Jingdongdong
 * @Date: 2022-02-11 18:05:51
 * @LastEditTime: 2022-02-13 15:23:53
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '微前端演示服务Demo';
  }
}
 