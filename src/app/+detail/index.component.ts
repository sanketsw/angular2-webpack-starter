import { Component } from '@angular/core';

@Component({
  selector: 'index',

  template: `
    <h1>Hello from Sanket</h1>
  `
})
export class Index {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component');
  }
}
