import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  constructor(private appComponent: AppComponent) {

  }

  toLocation(location: any) {
    this.appComponent.mobileMenu = false;
    this.appComponent.mainPage = true;

    setTimeout(() => {
      var scrollSection = document.getElementById(location)?.offsetTop;
      var goal = scrollSection! - 100;
      window.scrollTo({ top: goal, behavior: 'smooth' });
    }, 200)

  }
}
