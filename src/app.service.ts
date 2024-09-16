import { Injectable } from '@nestjs/common';
import { quotes } from './database/quotes';


@Injectable()
export class AppService {
  getTopAuthor() :any{
    let tmp = quotes.quotes.map(x=>[x.author, quotes.quotes.filter(z=> z.author == x.author).length]).sort(function(a,b){return Number(b[1])-Number(a[1]);});
    return(
      "<ul>"+tmp.slice(0, tmp.filter(x=> x[1]==Number(tmp[0][1])).length).map(x=> "<li>"+x[0]+"</li>")+"</ul>"
      )
  }
  getRandom():string {

    let tmp = quotes.quotes[Math.floor(Math.random()*(quotes.quotes.length)+1)];
    return(
      "<p>" +tmp.author+":\t"+tmp.quote+ "</p>"
    )
  }
  getQuotes():any {
    return(
      "<ul>"+
      quotes.quotes.map(x=> "<li>"+ x.author+"\t"+x.quote+"</li>")
      +"</ul>"
    )
  }
  getHello(): string {
    return "<p>"+'Hello World!'+"</p>";
  }
}
