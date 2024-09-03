import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2020 - 2024",
      ubicacion: "Ixtac, Veracruz",
      puesto: "Desarrollador de Software",
      empresa: "Empresa 1",
      logros: [
        { descripcion: "Desarrollo de aplicaciones web" },
        { descripcion: "Desarrollo de aplicaciones móviles" },
      ]

    };
    let work2 = {
      fecha: "2021 - 2024",
      ubicacion: "Córdoba, Veracruz",
      puesto: "Desarrollador de Software",
      empresa: "Empresa 2",
      logros: [
        { descripcion: "Desarrollo de aplicaciones web" },
        { descripcion: "Desarrollo de aplicaciones móviles" },
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);


  }

}
