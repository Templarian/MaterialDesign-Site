import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'Home';
}
