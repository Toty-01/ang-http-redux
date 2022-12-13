import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'sty-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  title = 'Mon app';

  fruits = ['lemon', 'kiwi','banana','peach','orange'];

  customer = {
    "name": "Daria Pollard",
    "age": 17,
  }
  myInput ='input'

  version = VERSION.major;
  color = VERSION.major != "15" ? "red" : "green";

  count = 0;
  add(){
    this.count = this.count +1;
  }
  less() {
    this.count = this.count -1;
  }

  users = [
    {lastName: 'Dupond', firstName: 'Nicoals', age: 18, cp: '34400'},
    {lastName: 'Henry', firstName: 'Amandine', age: 10, cp: '38002'},
    {lastName: 'Sheppard', firstName: 'Julie', age: 9, cp: '35692'},
    {lastName: 'Lugano', firstName: 'Jean', age: 15, cp: '42360'},
    {lastName: 'Bako', firstName: 'Diac', age: 21, cp: '13658'},
    {lastName: 'Franc', firstName: 'Emilie', age: 36, cp: '90000'},
    {lastName: 'Laurent', firstName: 'René', age: 52, cp: '72360'},
  ]

  constructor() {
  }
}
