import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosEspecialistasComponent } from './nuestros-especialistas.component';

describe('NuestrosEspecialistasComponent', () => {
  let component: NuestrosEspecialistasComponent;
  let fixture: ComponentFixture<NuestrosEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosEspecialistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
