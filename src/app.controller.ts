import { Controller, Delete, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('/quotes')
  @Render('index')
  getQuotes() {
    return {
      message: this.appService.getQuotes()
    };
  }


  @Get('/randomQuote')
  @Render('index')
  getRandom() {
    return {
      message: this.appService.getRandom()
    };
  }

  @Get('/topAuthors')
  @Render('index')
  getTopAuthor() {
    return {
      message: this.appService.getTopAuthor()
    };
  }

  @Get('/quotes/:id')
  @Render('index')
  getId(@Param('id') id: string) {
    return {
      message: this.appService.getId(id)
    };
  }

  @Get('/deleteQuote/:id')
  @Render('index')
  DeleteId(@Param('id') id: string) {
    return {
      message: this.appService.deleteId(id)
    };
  }

}
