import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  constructor(private appComponent: AppComponent) {

  }

  backToMainPage() {
    if (this.appComponent.mainPage == false) {
      this.appComponent.imprint = false;
      this.appComponent.mainPage = true;
    }

    if (this.appComponent.mobileMenu == true) {
      this.appComponent.mobileMenu = false;
      this.appComponent.mainPage = true;
    }
  }
}
