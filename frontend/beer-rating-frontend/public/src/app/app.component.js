import {Component} from 'angular2/core';

//Ofwel dit
class AppComponent {
  static get annotations(){
    return [
      new Component({
        selector: 'my-app',
        template:'<h1>My first Angular 2 App</h1>'
      })
    ];
  }
  constructor() {}
}
/* Ofwel dit
class AppComponent{
  constructor(){}
}
AppComponent.annotations = [
  new Component({
    selector:'my-app',
    template:'<h1>My first Angular 2 App</h1>'
  })
];
*/

export{AppComponent};
