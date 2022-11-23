import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistasHistoriaComponent } from './especialistas-historia.component';

describe('EspecialistasHistoriaComponent', () => {
  let component: EspecialistasHistoriaComponent;
  let fixture: ComponentFixture<EspecialistasHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistasHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialistasHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
