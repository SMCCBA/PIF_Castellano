import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELComponent } from './el.component';

describe('ELComponent', () => {
  let component: ELComponent;
  let fixture: ComponentFixture<ELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
