import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIIComponent } from './body-ii.component';

describe('BodyIIComponent', () => {
  let component: BodyIIComponent;
  let fixture: ComponentFixture<BodyIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
