import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {

  toLocation(location: any) {
    var scrollSection = document.getElementById(location)?.offsetTop;
    var goal = scrollSection! - 100;
    window.scrollTo({ top: goal, behavior: 'smooth'});
  }
}
