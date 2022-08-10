import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app-shell';
  counter = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 1000);
}
}
