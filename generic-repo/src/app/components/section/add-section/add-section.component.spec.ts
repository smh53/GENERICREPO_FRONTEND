import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionComponent } from './add-section.component';

describe('AddSectionComponent', () => {
  let component: AddSectionComponent;
  let fixture: ComponentFixture<AddSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
