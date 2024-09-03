import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "EDUCATION"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('EDUCATION');
  });

  it('should render the start date and end date for each item', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('2015 - 2019');
    expect(compiled.querySelector('table')?.textContent).toContain('2020 - 2024');
  });

  it('should render the faculty for each item', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('Facultad de Ingeniería');
    expect(compiled.querySelector('table')?.textContent).toContain('Facultad de Ciencias Computacionales');
  });

  it('should render the university for each item', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('Universidad Nacional Autónoma de México');
    expect(compiled.querySelector('table')?.textContent).toContain('Instituto Politécnico Nacional');
  });
});