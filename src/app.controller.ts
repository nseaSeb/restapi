import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { version: this.appService.getVersion() };
  }

  @Get(':name')
  findAll(@Param('name') name: string) {
    console.log('@GET name', name);
    return this.appService.findAll(name);
  }
  @Get(':name/:id')
  findOne(@Param('name') name: string, @Param('id') id: string) {
    console.log('get by id name', name);
    console.log('get by id id', id);
    //return `name: ${name}, id: ${id}`;
    return this.appService.findOne(name, id);
  }
  @Post(':name')
  create(@Param('name') name: string, @Body() creatBody: any) {
    console.log('@POST name', name);
    console.log('post', creatBody);
    const now = new Date().toISOString();
    const createApiDto = {
      key: name,
      data: JSON.stringify(creatBody),
      createDate: now,
      updateDate: now,
    };
    return this.appService.create(name, createApiDto);
  }
  @Put(':name/:id')
  update(
    @Param('name') name: string,
    @Param('id') id: string,
    @Body() createBody: any,
  ) {
    return this.appService.update(name, id, JSON.stringify(createBody));
  }

  @Delete(':name/:id')
  remove(@Param('name') name: string, @Param('id') id: string) {
    this.appService.deleteOne(name, id);
    return `This action removes #${id}`;
  }
}
