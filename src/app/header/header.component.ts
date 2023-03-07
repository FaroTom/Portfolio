import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


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
  var scrollSection = document.getElementById(location)?.offsetTop;
  var goal = scrollSection! - 100;
  window.scrollTo({ top: goal, behavior: 'smooth'});
}
}
