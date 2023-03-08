import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private appComponent: AppComponent) {

  }

  openImprint() {
    this.appComponent.mainPage = false;
    this.appComponent.imprint = true;

  }

  redirectTo(location:any) {
    window.open(location, "_blank")
  }

  toLocation(location: any) {
    var scrollSection = document.getElementById(location)?.offsetTop;
    var goal = scrollSection! - 100;
    window.scrollTo({ top: goal, behavior: 'smooth'});
  }
}
