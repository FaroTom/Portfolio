import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {

  
  redirectTo(location:any) {
    window.open(location, "_blank")
  }
}
