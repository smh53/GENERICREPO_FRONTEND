import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererActionsComponent } from './renderer-actions.component';

describe('RendererActionsComponent', () => {
  let component: RendererActionsComponent;
  let fixture: ComponentFixture<RendererActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendererActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
