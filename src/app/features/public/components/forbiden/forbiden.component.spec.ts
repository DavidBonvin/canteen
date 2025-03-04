import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbidenComponent } from './forbiden.component';

describe('ForbidenComponent', () => {
  let component: ForbidenComponent;
  let fixture: ComponentFixture<ForbidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbidenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForbidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
