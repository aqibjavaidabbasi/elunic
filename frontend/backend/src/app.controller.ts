import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Controller('api')
export class AppController {
  constructor(
    @InjectModel(UserActivation)
    private userMessageModel: any
  ) {}

  @Get('hello')
  getHello() {
    return { message: 'hello', items: [1, 2, 3] };
  }

  @Post('messages')
  async createMessage(@Body('message') message: string) {
    return await this.userMessageModel.create({ message });
  }

  @Get('messages')
  async getMessages(@Query('page') page: number = 1) {
    const limit = 3;
    const offset = (page - 1) * limit;
    const { rows, count } = await this.userMessageModel.findAndCountAll({ limit, offset });
    return { messages: rows, total: count };
  }
}

// ok so this are all out apis that we have integrated into frontend ok ? basically 
/**
 * 
 * I generated a nest resource via command nest g resource User, I could've created files and folders for entites etc etc
 * manually but as it is nestjs not expressjs so thats why I got the sweet out of it 
 * so here are all the apis..
 * 
 * 
 */