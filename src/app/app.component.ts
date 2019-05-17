import { Component } from '@angular/core';

@Component({
  selector: 'dtca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Komponentin otisikko on tässä!';
message = '';

onButtonClick() {
  console.log('moikka');
  this.message = 'heippa';

}
}
