import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Digital Wallet';
  showHead: boolean;
  constructor(private router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        if (
          event["url"] == "/auth" 
        ) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
  }


