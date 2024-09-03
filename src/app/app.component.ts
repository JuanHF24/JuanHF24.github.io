import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component'; // Importa el componente de educación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregir styleUrl a styleUrls
})
export class AppComponent {
  title = 'mycv';
}