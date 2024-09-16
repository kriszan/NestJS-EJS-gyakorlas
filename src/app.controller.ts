import { Controller, Get, Render } from '@nestjs/common';
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
}
