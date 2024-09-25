import { Injectable } from '@nestjs/common';
import { quotes } from './database/quotes';

const fs = require("fs");

@Injectable()
export class AppService {
  UpdateQuotes(text: string) {
    return quotes.quotes.filter(x=> x.quote.includes(text)? x:"");
  }
  getTopAuthor(): any {
    //let tmp = quotes.quotes.map(x => [x.author, quotes.quotes.filter(z => z.author == x.author).length]).sort(function (a, b) { return Number(b[1]) - Number(a[1]); });
    /*
    interface Author{
      nev: string,
      elofordulas : number
    }*/

    let tmp = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    return (
      "<table>"+
        "<thead>"+"<th>Név</th>"+"<th>DB</th>"+"</thead>"+
          //{tmp(quotes :any,'length':string)}
        +
      "</table>"
    )
  }
  getRandom(): string {

    let tmp = quotes.quotes[Math.floor(Math.random() * (quotes.quotes.length) + 1)];
    return (
      "<p>" + tmp.author + ":\t" + tmp.quote + "</p>"
    )
  }
  getQuotes(): any {
    /*let stringStuff = "";
    quotes.quotes.forEach(e=> stringStuff+="<li>" + e.author + "\t" + e.quote+ "</li>");
    return (
      "<ul>" +
      stringStuff
      + "</ul>"
    )*/
    return (
      "<ul>" +
      quotes.quotes.map(e=> "<li>" + e.author + "\t" + e.quote+ "</li>")
      + "</ul>"
    )
  }
  getHello(): string {
    return "<p>" + 'Hello World!' + "</p>";
  }

  getId(id): string {
    console.log(quotes.quotes);
    return quotes.quotes[id - 1].author + "\t" + quotes.quotes[id - 1].quote;
  }

  deleteId(id): string {
    if ( quotes.quotes[id - 1] !== undefined) {
      quotes.quotes.splice(id - 1, 1);
      //quotes.quotes = JSON.parse(JSON.stringify(quotes.quotes));
      /*fs.writeFile("/NestJS-EJS-gyakorlas/src/database/quotes.ts", quotes, (error) => {
        if (error) {
          console.error(error);
          throw error;
        }
      })*/
      //return "ID törölve";
      return typeof quotes.quotes[id - 1];
    }
    else return "A keresett Id nem található";
  }

}
