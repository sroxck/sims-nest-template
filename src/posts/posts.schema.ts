/*
 * @Author: Jingdongdong
 * @Date: 2022-02-13 17:53:34
 * @LastEditTime: 2022-02-13 21:54:53
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { prop } from "@typegoose/typegoose"
export class Posts{
  @prop()
  title: string
  @prop()
  HTMLStr: string 
}