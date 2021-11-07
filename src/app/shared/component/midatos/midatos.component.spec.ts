import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidatosComponent } from './midatos.component';

describe('MidatosComponent', () => {
  let component: MidatosComponent;
  let fixture: ComponentFixture<MidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
