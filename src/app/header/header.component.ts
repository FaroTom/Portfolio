import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private appComponent: AppComponent) {

  }

  highlightLink(id: any) {
    this.resetHighlight()
    document.getElementById(id)?.classList.add('highlight')
  }

  resetHighlight() {
    let skills = document.getElementById('skills');
    let aboutMe = document.getElementById('about-me');
    let portfolio = document.getElementById('portfolio');
    if (skills?.classList.contains('highlight')) {
      skills.classList.remove('highlight')
    }
    if (aboutMe?.classList.contains('highlight')) {
      aboutMe.classList.remove('highlight')
    }
    if (portfolio?.classList.contains('highlight')) {
      portfolio.classList.remove('highlight')
    }
  }

  toLocation(location: any) {
    if (this.appComponent.imprint == true) {
      this.appComponent.imprint = false;
      this.appComponent.mainPage = true;
      setTimeout(() => {
        var scrollSection = document.getElementById(location)?.offsetTop;
        var goal = scrollSection! - 100;
        window.scrollTo({ top: goal, behavior: 'smooth' });
      })
    } else {
      var scrollSection = document.getElementById(location)?.offsetTop;
      var goal = scrollSection! - 100;
      window.scrollTo({ top: goal, behavior: 'smooth' });
    }
  }

  /* On imprint page - clicking on logo redirects back to main page **/
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

  openMenu() {
    if (this.appComponent.mobileMenu != true) {
      this.appComponent.mobileMenu = true;
      this.appComponent.mainPage = false;
    } else {
      if(this.appComponent.imprint == true) {
        this.appComponent.imprint = false;
      }
      this.appComponent.mobileMenu = false;
      this.appComponent.mainPage = true;
    }

  }
}
