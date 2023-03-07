import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss']
})
export class IntroductionSectionComponent {

  toLocation(location: any) {
    var scrollSection = document.getElementById(location)?.offsetTop;
    var goal = scrollSection! - 100;
    window.scrollTo({ top: goal, behavior: 'smooth'});
  }

  redirectTo(location:any) {
    window.open(location, "_blank")
  }
}
