import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritosComponent } from './escritos.component';

describe('EscritosComponent', () => {
  let component: EscritosComponent;
  let fixture: ComponentFixture<EscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
