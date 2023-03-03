import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';

const routes: Routes = [
  {path: 'introduction-section', component: IntroductionSectionComponent},
  {path: 'about-me-section', component: AboutMeSectionComponent},
  {path: 'skills-section', component: SkillsSectionComponent},
  {path: 'portfolio-section', component: PortfolioSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
