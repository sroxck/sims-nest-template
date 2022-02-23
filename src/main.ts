/*
 * @Author: Jingdongdong
 * @Date: 2022-02-11 18:05:51
 * @LastEditTime: 2022-02-23 15:31:39
 * @LastEditors: Jingdongdong
 * @Description: 
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启验证管道
  app.useGlobalPipes(new ValidationPipe())
  // 接入swagger文档
  const config = new DocumentBuilder()
    .setTitle('微前端服务API')
    .setDescription('微前端演示服务')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
