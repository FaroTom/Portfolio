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
    if(document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'unset';
    }
    
    this.appComponent.mobileMenu = false;
    if(this.appComponent.imprint == true) {
      this.appComponent.imprint = false;
      this.appComponent.mainPage = true;
    } else {
      this.appComponent.mainPage = true;
    }
    
    setTimeout(() => {
      var scrollSection = document.getElementById(location)?.offsetTop;
      var goal = scrollSection! - 100;
      window.scrollTo({ top: goal, behavior: 'smooth' });
    }, 200)

  }
}
