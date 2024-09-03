import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Array<any> = [];

  ngOnInit(): void {
    let education1 = {
      fechaInicio: "2015",
      fechaFin: "2019",
      facultad: "Facultad de Ingeniería",
      universidad: "Universidad Nacional Autónoma de México"
    };
    let education2 = {
      fechaInicio: "2020",
      fechaFin: "2024",
      facultad: "Facultad de Ciencias Computacionales",
      universidad: "Instituto Politécnico Nacional"
    };

    this.educationList.push(education1);
    this.educationList.push(education2);
  }
}