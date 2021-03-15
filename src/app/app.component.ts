import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular with Sentry Integration Example';

  spawnBug() {
    throw new Error("A bug has appeared!");
  }
}
