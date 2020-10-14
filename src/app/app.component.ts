import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a  class="navbar-brand"> {{pageTitle}}</a>
    <ul class="nav nav-pills">

       <li><a [routerLink]="['/welcome']" class="nav-link"> Home </a></li>

       <li><a [routerLink]="['/products']" class="nav-link">Product List</a></li>

    </ul>
</nav>

<router-outlet> </router-outlet>
  
  `,
})
export class AppComponent {
  pageTitle = 'Acme Product Managment';
}
