import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdi-home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  title: string = 'Home';
}
