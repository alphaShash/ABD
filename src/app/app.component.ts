import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ABD';
  course = 'Angular';
  img = 'hello';

  goBack(): void{}
}
